import { database, env, failure, json, requireAdmin } from "../../../lib/server";
import { HttpError, isAllowedOrigin, readJson, validateMessage } from "../../../lib/security";

function cors(request: Request) {
  const origin = request.headers.get("origin");
  const headers = new Headers({ Vary: "Origin" });
  if (isAllowedOrigin(origin, process.env.ALLOWED_ORIGINS || "")) {
    headers.set("Access-Control-Allow-Origin", origin!);
    headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
  }
  return headers;
}

export async function OPTIONS(request: Request) {
  const headers = cors(request);
  return new Response(null, { status: headers.has("Access-Control-Allow-Origin") ? 204 : 403, headers });
}

export async function POST(request: Request) {
  const headers = cors(request);
  try {
    if (!headers.has("Access-Control-Allow-Origin")) throw new HttpError(403, "Request origin rejected.");
    const input = await readJson(request);
    const message = validateMessage(input);
    const token = (input as Record<string, unknown>).turnstileToken;
    const secret = env("TURNSTILE_SECRET_KEY");
    const hostnames = env("TURNSTILE_HOSTNAMES").split(",").map((value) => value.trim());
    if (typeof token !== "string" || !token || token.length > 2048) throw new HttpError(400, "Please complete verification.");
    const check = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST", body: new URLSearchParams({ secret, response: token }), signal: AbortSignal.timeout(10000)
    });
    if (!check.ok) throw new HttpError(502, "Verification service unavailable.");
    const verification = await check.json();
    if (!verification.success || !hostnames.includes(verification.hostname)) throw new HttpError(400, "Verification failed. Please retry.");
    await database("", { method: "POST", headers: { Prefer: "return=minimal" }, body: JSON.stringify(message) });
    return json({ ok: true }, 201, headers);
  } catch (error) { return failure(error, headers); }
}

export async function GET(request: Request) {
  try {
    await requireAdmin();
    const rawOffset = new URL(request.url).searchParams.get("offset") || "0";
    if (!/^\d{1,8}$/.test(rawOffset)) throw new HttpError(400, "Invalid offset.");
    const offset = Number(rawOffset);
    const response = await database(`?select=id,name,email,message,created_at,is_read&order=created_at.desc,id.desc&limit=51&offset=${offset}`);
    const rows = await response.json();
    return json({ messages: rows.slice(0, 50), hasMore: rows.length > 50 });
  } catch (error) { return failure(error); }
}
