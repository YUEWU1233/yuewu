import { cookies } from "next/headers";
import { COOKIE, cookieOptions, env, failure, json, requireSameOrigin, supabase } from "../../../lib/server";
import { HttpError, readJson } from "../../../lib/security";

export async function POST(request: Request) {
  try {
    requireSameOrigin(request);
    const body = await readJson(request, 4096) as Record<string, unknown> | null;
    if (!body || typeof body.email !== "string" || typeof body.password !== "string" || !body.email || !body.password) {
      throw new HttpError(400, "Enter your email and password.");
    }
    const response = await supabase("/auth/v1/token?grant_type=password", {
      method: "POST", body: JSON.stringify({ email: body.email, password: body.password })
    });
    if (!response.ok) throw new HttpError(response.status === 429 ? 429 : 401, response.status === 429 ? "Too many attempts. Try again later." : "Sign-in failed.");
    const session = await response.json();
    if (!session.user?.id || session.user.id !== env("ADMIN_USER_ID")) throw new HttpError(403, "Administrator access required.");
    (await cookies()).set(COOKIE, session.access_token, { ...cookieOptions, maxAge: Math.min(session.expires_in || 3600, 3600) });
    return json({ ok: true });
  } catch (error) { return failure(error); }
}
