import type { NextConfig } from "next";

const isProd = process.env.GITHUB_PAGES === "true";
const repo = "yuewu";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;