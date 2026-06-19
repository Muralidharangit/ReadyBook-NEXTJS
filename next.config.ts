import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api-backend/v1/:path*',
        destination: 'http://127.0.0.1:8001/api/v1/:path*', // Proxy to Backend to bypass CORS
      },
    ];
  },
};

export default nextConfig;
