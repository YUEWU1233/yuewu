import path from "node:path";
import type { NextConfig } from "next";

const config: NextConfig = {
  turbopack: { root: path.resolve(process.cwd()) },
  async headers() {
    return [{ source: "/:path*", headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "same-origin" },
      { key: "X-Robots-Tag", value: "noindex, nofollow" }
    ] }];
  }
};
export default config;
