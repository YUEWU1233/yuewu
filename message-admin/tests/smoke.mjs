// Run after npm run build. All credentials and database responses are synthetic.
import assert from 'node:assert/strict';
import http from 'node:http';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { setTimeout as delay } from 'node:timers/promises';

const require = createRequire(import.meta.url);
const adminId = '00000000-0000-0000-0000-000000000001';
const messageId = '00000000-0000-0000-0000-000000000002';
let reads = 0;
const mock = http.createServer(async (req, res) => {
  let body = '';
  for await (const chunk of req) body += chunk;
  res.setHeader('Content-Type', 'application/json');
  if (req.url.startsWith('/auth/v1/token')) {
    const input = JSON.parse(body);
    const admin = input.email === 'admin@example.test';
    res.end(JSON.stringify({ access_token: admin ? 'admin-token' : 'other-token', expires_in:3600, user:{id:admin ? adminId : 'not-admin'} }));
  } else if (req.url === '/auth/v1/user') {
    const token = req.headers.authorization;
    if (token === 'Bearer admin-token') res.end(JSON.stringify({id:adminId}));
    else if (token === 'Bearer other-token') res.end(JSON.stringify({id:'not-admin'}));
    else { res.statusCode = 401; res.end('{}'); }
  } else if (req.url.startsWith('/rest/v1/messages')) {
    assert.equal(req.headers.apikey, 'sb_secret_mock');
    assert.equal(req.headers.authorization, undefined);
    reads++;
    if (req.method === 'GET') res.end(JSON.stringify([{id:messageId, name:'Anna', email:'a@example.test', message:'Hello', created_at:'2026-01-01T00:00:00Z', is_read:false}]));
    else res.end(JSON.stringify([{id:messageId}]));
  } else res.end('{}');
});
await new Promise(resolve => mock.listen(0, '127.0.0.1', resolve));
const reserve = http.createServer();
await new Promise(resolve => reserve.listen(0, '127.0.0.1', resolve));
const port = reserve.address().port;
await new Promise(resolve => reserve.close(resolve));
const base = `http://localhost:${port}`;
const server = spawn(process.execPath, [require.resolve('next/dist/bin/next'), 'start', '--port', String(port)], {
  cwd: new URL('..', import.meta.url),
  env: {...process.env, SUPABASE_URL:`http://127.0.0.1:${mock.address().port}`, SUPABASE_PUBLISHABLE_KEY:'sb_publishable_mock', SUPABASE_SECRET_KEY:'sb_secret_mock', ADMIN_USER_ID:adminId, ALLOWED_ORIGINS:'https://portfolio.example.test', TURNSTILE_SECRET_KEY:'', TURNSTILE_HOSTNAMES:'portfolio.example.test'},
  stdio:['ignore','pipe','pipe']
});
let output = '';
server.stdout.on('data', chunk => {output += chunk});
server.stderr.on('data', chunk => {output += chunk});
let assertions = 0;
const status = async (path, init, expected) => {
  const response = await fetch(base + path, {...init, redirect:'manual'});
  assert.equal(response.status, expected, `${init?.method || 'GET'} ${path}`);
  assertions++;
  return response;
};
const post = (body, origin = base) => ({method:'POST', headers:{'Content-Type':'application/json', Origin:origin}, body:JSON.stringify(body)});
try {
  let ready = false;
  for (let i = 0; i < 100; i++) {
    if (server.exitCode !== null) throw new Error(output);
    try { if ((await fetch(base + '/login')).ok) {ready = true; break;} } catch {}
    await delay(150);
  }
  assert.ok(ready, output);
  await status('/admin', {}, 307);
  await status('/api/messages', {}, 401);
  await status('/api/login', post({email:'admin@example.test',password:'test'}, 'https://evil.test'), 403);
  await status('/api/login', post({email:'other@example.test',password:'test'}), 403);
  await status('/api/messages', {headers:{Cookie:'message_admin_session=other-token'}}, 403);
  assert.equal(reads, 0, 'Unauthenticated and non-admin requests must never reach the database');
  const login = await status('/api/login', post({email:'admin@example.test',password:'test'}), 200);
  const cookie = login.headers.get('set-cookie');
  assert.match(cookie, /HttpOnly/i);
  assert.match(cookie, /SameSite=strict/i);
  assert.match(cookie, /Secure/i);
  const headers = {Cookie:cookie.split(';')[0], Origin:base, 'Content-Type':'application/json'};
  await status('/admin', {headers}, 200);
  const list = await status('/api/messages', {headers}, 200);
  assert.equal((await list.json()).messages[0].id, messageId);
  assert.equal(list.headers.get('cache-control'), 'no-store');
  await status('/api/messages?offset=bad', {headers}, 400);
  await status(`/api/messages/${messageId}`, {method:'PATCH',headers:{...headers, Origin:'https://evil.test'},body:'{"is_read":true}'},403);
  await status(`/api/messages/${messageId}`, {method:'PATCH',headers,body:'{"is_read":"yes"}'},400);
  await status('/api/messages/bad-id', {method:'DELETE',headers},400);
  await status(`/api/messages/${messageId}`, {method:'PATCH',headers,body:'{"is_read":true}'},200);
  await status(`/api/messages/${messageId}`, {method:'DELETE',headers},200);
  await status('/api/messages', post({name:'A',email:'a@example.test',message:'hello'},'https://evil.test'),403);
  const preflight = await status('/api/messages', {method:'OPTIONS',headers:{Origin:'https://portfolio.example.test','Access-Control-Request-Method':'POST'}},204);
  assert.equal(preflight.headers.get('access-control-allow-origin'),'https://portfolio.example.test');
  await status('/api/messages', post({name:'A',email:'bad',message:'hello'},'https://portfolio.example.test'),400);
  await status('/api/messages', post({name:'A',email:'a@example.test',message:'hello'},'https://portfolio.example.test'),503);
  await status('/api/logout', {method:'POST',headers},200);
  console.log(`Passed ${assertions} HTTP checks: authorization, cookies, database operations, CORS, validation, and submission disabled without CAPTCHA configuration.`);
} finally {
  server.kill();
  await new Promise(resolve => mock.close(resolve));
}
