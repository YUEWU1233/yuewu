"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setBusy(true); setError("");
    try {
      const response = await fetch("/api/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: form.get("email"), password: form.get("password") }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      router.replace("/admin");
      router.refresh();
    } catch (error) { setError(error instanceof Error ? error.message : "Unable to sign in."); }
    finally { setBusy(false); }
  }
  return <section className="card login"><h2>Administrator sign in</h2><p>Use your designated Supabase administrator account.</p><form onSubmit={submit}><label>Email<input type="email" name="email" autoComplete="username" required maxLength={254} /></label><label>Password<input type="password" name="password" autoComplete="current-password" required maxLength={1024} /></label><button disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button><p role="alert">{error}</p></form><small>Sessions last up to one hour. Sign in again when your session expires.</small></section>;
}
