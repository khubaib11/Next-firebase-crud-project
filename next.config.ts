import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
