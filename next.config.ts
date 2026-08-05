import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site (no SSR / API routes): emit an `out/` folder of
  // HTML/CSS/JS that Cloudflare serves as static assets.
  output: "export",
};

export default nextConfig;
