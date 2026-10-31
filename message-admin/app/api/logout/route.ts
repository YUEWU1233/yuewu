import { cookies } from "next/headers";
import { COOKIE, cookieOptions, failure, json, requireSameOrigin, supabase } from "../../../lib/server";

export async function POST(request: Request) {
  try {
    requireSameOrigin(request);
    const store = await cookies();
    const token = store.get(COOKIE)?.value;
    // Remove local access even when the upstream session is already expired.
    store.set(COOKIE, "", { ...cookieOptions, maxAge: 0 });
    if (token) await supabase("/auth/v1/logout?scope=local", { method: "POST" }, token).catch(() => undefined);
    return json({ ok: true });
  } catch (error) { return failure(error); }
}
