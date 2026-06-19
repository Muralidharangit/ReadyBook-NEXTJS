import type { NextConfig } from "next";

/**
 * ==========================================
 * NEXT.JS CONFIGURATION & CORS PROXY
 * ==========================================
 * This config controls how the Next.js server behaves.
 */
const nextConfig: NextConfig = {
  // We use `rewrites()` to bypass browser CORS errors. 
  // Browsers block direct requests from the frontend (localhost:3000) to external backends.
  // By using a proxy, the browser thinks it's talking to its own server, but Next.js silently forwards the traffic.
  async rewrites() {
    return [
      {
        // When the frontend asks for: /api-backend/v1/...
        source: '/api-backend/v1/:path*',
        // Next.js silently fetches data from: https://staging.admin.reddybook247.net/api/v1/...
        destination: 'https://staging.admin.reddybook247.net/api/v1/:path*', 
      },
    ];
  },
};

export default nextConfig;
