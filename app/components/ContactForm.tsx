"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const API_URL = "https://yuewu-sooty.vercel.app/api/messages";
const SITE_KEY = "0x4AAAAAAFueil5KAeSLHS6t";

type Turnstile = {
  render: (container: HTMLElement, options: {
    sitekey: string;
    theme: string;
    size: string;
    callback: (token: string) => void;
    "expired-callback": () => void;
    "error-callback": () => void;
  }) => string | undefined;
  remove: (id: string) => void;
  reset: (id: string) => void;
};

declare global {
  interface Window { turnstile?: Turnstile }
}

export default function ContactForm() {
  const container = useRef<HTMLDivElement>(null);
  const widget = useRef<string | undefined>(undefined);
  const inFlight = useRef(false);
  const request = useRef<AbortController | null>(null);
  const [ready, setReady] = useState(false);
  const [token, setToken] = useState("");
  const [busy, setBusy] = useState(false);
  const [verificationError, setVerificationError] = useState("");
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  useEffect(() => {
    if (!ready || !container.current || !window.turnstile) return;
    const api = window.turnstile;
    const id = api.render(container.current, {
      sitekey: SITE_KEY,
      theme: "light",
      size: "flexible",
      callback: (value) => { setToken(value); setVerificationError(""); },
      "expired-callback": () => { setToken(""); },
      "error-callback": () => {
        setToken("");
        setVerificationError("Verification is unavailable. Please check your connection or reload the page.");
      },
    });
    widget.current = id;
    return () => {
      if (id !== undefined) api.remove(id);
      widget.current = undefined;
    };
  }, [ready]);

  useEffect(() => () => {
    const active = request.current;
    request.current = null;
    active?.abort();
  }, []);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current || !token) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !message) {
      setResult({ ok: false, message: "Please enter your name and message." });
      return;
    }
    inFlight.current = true;
    setBusy(true);
    setResult(null);
    const controller = new AbortController();
    request.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 25000);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "omit",
        body: JSON.stringify({ name, email, message, turnstileToken: token }),
        signal: controller.signal,
      });
      if (!response.ok) {
        setResult({ ok: false, message: response.status === 400
          ? "Please check your details and complete verification again before retrying."
          : "Your message could not be saved. Please try again later." });
        return;
      }
      form.reset();
      setResult({ ok: true, message: "Thank you! Your message has been received." });
    } catch {
      if (request.current === controller) {
        setResult({ ok: false, message: "We could not confirm delivery. Your text is still here; check your connection before trying again." });
      }
    } finally {
      window.clearTimeout(timeout);
      if (request.current === controller) {
        request.current = null;
        inFlight.current = false;
        setBusy(false);
        setToken("");
        if (widget.current !== undefined) window.turnstile?.reset(widget.current);
      }
    }
  }

  const inputClass = "mt-2 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200 disabled:opacity-60";

  return (
    <>
      <Script
        id="contact-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        onReady={() => setReady(true)}
        onError={() => setVerificationError("Verification could not load. Please check your connection or reload the page.")}
      />
      <form onSubmit={submit} className="space-y-6" aria-busy={busy}>
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-slate-800" htmlFor="contact-name">
            Name
            <input id="contact-name" name="name" autoComplete="name" required maxLength={100} disabled={busy} className={inputClass} />
          </label>
          <label className="block text-sm font-semibold text-slate-800" htmlFor="contact-email">
            Email
            <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} disabled={busy} className={inputClass} />
          </label>
        </div>
        <label className="block text-sm font-semibold text-slate-800" htmlFor="contact-message">
          Message
          <textarea id="contact-message" name="message" required maxLength={5000} rows={7} disabled={busy} className={`${inputClass} resize-y`} />
          <span className="mt-2 block text-xs font-normal text-slate-500">Up to 5,000 characters. All fields are required.</span>
        </label>
        <p className="text-sm leading-relaxed text-slate-600">
          Your name, email and message will be stored to respond to your enquiry. Messages are private and will not be displayed publicly.
        </p>
        <div className="min-h-[65px]" ref={container} />
        <p className="text-sm text-slate-600" role="status" aria-live="polite">
          {verificationError || (token ? "Verification complete." : "Please wait for verification before sending.")}
        </p>
        <button type="submit" disabled={busy || !token} className="rounded-full bg-[#4C594F] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#35403A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 disabled:cursor-not-allowed disabled:opacity-50">
          {busy ? "Sending…" : "Send message"}
        </button>
        <div aria-live="polite" aria-atomic="true">
          {result && <p className={`rounded-xl border p-4 text-sm ${result.ok ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-rose-200 bg-rose-50 text-rose-900"}`}>{result.message}</p>}
        </div>
        <noscript><p>JavaScript is required to verify and send your message.</p></noscript>
      </form>
    </>
  );
}
