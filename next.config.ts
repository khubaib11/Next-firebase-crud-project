import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/new',
        destination: '/posts/new',
        permanent: true,
      },
      {
        source: '/post/:id',
        destination: '/posts/:id',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
