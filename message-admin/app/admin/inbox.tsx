"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Message = { id: string; name: string; email: string; message: string; created_at: string; is_read: boolean };
async function fetchInbox(offset: number, onUnauthorized: () => void, signal?: AbortSignal): Promise<{ messages: Message[]; hasMore: boolean }> {
  const response = await fetch(`/api/messages?offset=${offset}`, { cache: "no-store", signal });
  if (response.status === 401 || response.status === 403) {
    onUnauthorized();
    throw new Error("Please sign in again.");
  }
  const data = await response.json();
  if (!response.ok) throw new Error(data.error);
  return data;
}
export default function Inbox() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState("");
  const load = useCallback(async (signal?: AbortSignal) => {
    try {
      const data = await fetchInbox(offset, () => router.replace("/login"), signal);
      setError("");
      setMessages(data.messages); setHasMore(data.hasMore);
    } catch (error) { if (!signal?.aborted) setError(error instanceof Error ? error.message : "Unable to load messages."); }
    finally { if (!signal?.aborted) setBusy(false); }
  }, [offset, router]);
  useEffect(() => {
    const controller = new AbortController();
    fetchInbox(offset, () => router.replace("/login"), controller.signal).then((data) => {
      if (!controller.signal.aborted) {
        setMessages(data.messages); setHasMore(data.hasMore); setError("");
      }
    }).catch((error: unknown) => {
      if (!controller.signal.aborted) setError(error instanceof Error ? error.message : "Unable to load messages.");
    }).finally(() => { if (!controller.signal.aborted) setBusy(false); });
    return () => controller.abort();
  }, [offset, router]);
  async function mutate(message: Message, method: "PATCH" | "DELETE") {
    if (method === "DELETE" && !window.confirm("Permanently delete this message?")) return;
    setBusy(true); setError("");
    try {
      const response = await fetch(`/api/messages/${message.id}`, { method, headers: { "Content-Type": "application/json" }, ...(method === "PATCH" ? { body: JSON.stringify({ is_read: !message.is_read }) } : {}) });
      if (response.status === 401 || response.status === 403) { router.replace("/login"); return; }
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      if (method === "DELETE" && messages.length === 1 && offset > 0) setOffset(offset - 50);
      else await load();
    } catch (error) { setError(error instanceof Error ? error.message : "Request failed."); }
    finally { setBusy(false); }
  }
  async function logout() {
    setBusy(true);
    try {
      const response = await fetch("/api/logout", { method: "POST" });
      if (!response.ok) throw new Error("Sign-out failed. Please retry.");
      router.replace("/login");
      router.refresh();
    } catch (error) { setError(error instanceof Error ? error.message : "Sign-out failed."); setBusy(false); }
  }
  return <section><div className="toolbar"><h2>Inbox</h2><div><button disabled={busy} onClick={() => void load()}>Refresh</button><button disabled={busy} onClick={logout}>Sign out</button></div></div><p role="alert" className="error">{error}</p>{busy && <p role="status">Working…</p>}{!busy && !error && messages.length === 0 && <div className="card"><h3>No messages yet</h3><p>Submitted messages will appear here once your public form is connected.</p></div>}<div aria-busy={busy}>{messages.map((message) => <article className="card" key={message.id}><div className="toolbar"><h3>{message.name}</h3><span className={message.is_read ? "badge" : "badge unread"}>{message.is_read ? "Read" : "Unread"}</span></div><p className="meta">{message.email}<br /><time dateTime={message.created_at}>{new Date(message.created_at).toLocaleString()}</time></p><p className="message">{message.message}</p><div className="actions"><button disabled={busy} onClick={() => mutate(message, "PATCH")}>Mark as {message.is_read ? "unread" : "read"}</button><button className="danger" disabled={busy} onClick={() => mutate(message, "DELETE")}>Delete</button></div></article>)}</div><nav className="toolbar" aria-label="Inbox pages"><button disabled={busy || offset === 0} onClick={() => setOffset(offset - 50)}>Previous</button><span>Page {offset / 50 + 1}</span><button disabled={busy || !hasMore} onClick={() => setOffset(offset + 50)}>Next</button></nav></section>;
}
