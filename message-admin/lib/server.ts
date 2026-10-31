import "server-only";
import { cookies } from "next/headers";
import { HttpError } from "./security";

export const COOKIE = "message_admin_session";
export const cookieOptions = { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict" as const, path: "/" };

export function env(name: string) {
  const value = process.env[name]?.trim();
  if (!value || value.startsWith("replace_")) throw new HttpError(503, "Server configuration is incomplete. See message-admin/README.md.");
  return value;
}

export async function supabase(path: string, init: RequestInit = {}, token?: string, privileged = false) {
  const key = env(privileged ? "SUPABASE_SECRET_KEY" : "SUPABASE_PUBLISHABLE_KEY");
  const headers = new Headers(init.headers);
  headers.set("apikey", key);
  headers.set("Content-Type", "application/json");
  if (token) headers.set("Authorization", `Bearer ${token}`);
  // New sb_secret keys belong in apikey, not in the bearer-JWT header.
  return fetch(`${env("SUPABASE_URL").replace(/\/$/, "")}${path}`, {
    ...init, headers, cache: "no-store", signal: AbortSignal.timeout(12000)
  });
}

export async function requireAdmin() {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) throw new HttpError(401, "Please sign in.");
  const response = await supabase("/auth/v1/user", {}, token);
  if (!response.ok) {
    if (response.status >= 500) throw new HttpError(502, "Authentication service unavailable.");
    throw new HttpError(401, "Session expired. Please sign in again.");
  }
  const user = await response.json();
  if (user.id !== env("ADMIN_USER_ID")) throw new HttpError(403, "Administrator access required.");
  return user as { id: string; email?: string };
}

export function requireSameOrigin(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    throw new HttpError(403, "Request origin rejected.");
  }
}

export function json(data: unknown, status = 200, headers?: HeadersInit) {
  const result = new Headers(headers);
  result.set("Cache-Control", "no-store");
  return Response.json(data, { status, headers: result });
}

export function failure(error: unknown, headers?: HeadersInit) {
  return json({ error: error instanceof HttpError ? error.message : "Service unavailable. Please try again." }, error instanceof HttpError ? error.status : 502, headers);
}

export async function database(path: string, init: RequestInit = {}) {
  const response = await supabase(`/rest/v1/messages${path}`, init, undefined, true);
  if (!response.ok) throw new HttpError(502, "Database request failed. Check the table grants and server configuration.");
  return response;
}
