export class HttpError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export function isAllowedOrigin(origin: string | null, allowed: string): boolean {
  return !!origin && allowed.split(",").map((value) => value.trim()).includes(origin);
}

export function validateMessage(input: unknown) {
  if (!input || typeof input !== "object") throw new HttpError(400, "Invalid message.");
  const data = input as Record<string, unknown>;
  const text = (key: string, max: number) => {
    const value = typeof data[key] === "string" ? data[key].trim() : "";
    if (!value || value.length > max) throw new HttpError(400, `Invalid ${key}.`);
    return value;
  };
  const name = text("name", 100);
  const email = text("email", 254);
  const message = text("message", 5000);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new HttpError(400, "Invalid email.");
  return { name, email, message };
}

export function validId(id: string) {
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) {
    throw new HttpError(400, "Invalid message ID.");
  }
  return id;
}

export async function readJson(request: Request, limit = 24000): Promise<unknown> {
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    throw new HttpError(415, "Use application/json.");
  }
  const reader = request.body?.getReader();
  if (!reader) throw new HttpError(400, "Missing request body.");
  let bytes = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    bytes += value.byteLength;
    if (bytes > limit) {
      await reader.cancel();
      throw new HttpError(413, "Request too large.");
    }
    chunks.push(value);
  }
  try {
    const all = new Uint8Array(bytes);
    let offset = 0;
    for (const chunk of chunks) { all.set(chunk, offset); offset += chunk.length; }
    return JSON.parse(new TextDecoder().decode(all));
  } catch { throw new HttpError(400, "Invalid JSON."); }
}
