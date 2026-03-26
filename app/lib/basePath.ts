const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const basePath = rawBasePath.replace(/\/$/, "");

export function withBasePath(path: string) {
  if (!path) return basePath || "";
  return path.startsWith("/") ? `${basePath}${path}` : `${basePath}/${path}`;
}
