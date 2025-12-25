import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for GitHub Pages static hosting
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
  basePath: '', // Empty for user site (username.github.io)
  trailingSlash: true, // Helps with GitHub Pages routing
  reactCompiler: true,
};

export default nextConfig;
