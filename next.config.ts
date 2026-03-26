import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/yuewu",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
