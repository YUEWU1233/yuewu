import test from 'node:test';
import assert from 'node:assert/strict';
import { validateMessage, validId, isAllowedOrigin, readJson } from '../lib/security.ts';

test('message validation trims and allowlists fields; refuses malformed input', () => {
  assert.deepEqual(validateMessage({ name: ' Anna ', email: 'a@example.com ', message: ' Hello ', is_read: true }), { name: 'Anna', email: 'a@example.com', message: 'Hello' });
  for (const input of [null, {}, { name:'A', email:'bad', message:'Hi' }, { name:'A', email:'a@example.com', message:'x'.repeat(5001) }]) assert.throws(() => validateMessage(input));
});
test('CORS compares exact origins, not prefixes or paths', () => {
  const allowed = 'https://example.com,http://localhost:3000';
  assert.equal(isAllowedOrigin('https://example.com', allowed), true);
  for (const origin of [null, 'null', 'https://example.com.evil.test', 'https://example.com/path']) assert.equal(isAllowedOrigin(origin, allowed), false);
});
test('IDs cannot inject REST filters', () => {
  assert.equal(validId('00000000-0000-0000-0000-000000000001'), '00000000-0000-0000-0000-000000000001');
  assert.throws(() => validId('x&is_read=eq.true'));
});
test('JSON parser enforces content type, syntax and actual body size', async () => {
  const request = (body, contentType = 'application/json') => new Request('http://localhost', { method:'POST', headers:{'Content-Type':contentType}, body });
  assert.deepEqual(await readJson(request('{"a":1}')), {a:1});
  await assert.rejects(readJson(request('{broken')), {status:400});
  await assert.rejects(readJson(request('{}', 'text/plain')), {status:415});
  await assert.rejects(readJson(request('x'.repeat(100)), 50), {status:413});
});
