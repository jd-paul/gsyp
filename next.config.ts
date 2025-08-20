import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Skip ESLint errors during `next build`
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Skip TS type errors during `next build`
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
