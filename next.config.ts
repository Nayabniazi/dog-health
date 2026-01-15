import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'microscopes.com.au',
      },
    ],
  },
};

export default nextConfig;
