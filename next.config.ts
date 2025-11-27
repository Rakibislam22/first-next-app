import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      img-src * blob: data:;
      font-src 'self' data:;
      connect-src *;
    `.replace(/\n/g, ""),
  },
];

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,

  async headers() {
    return [
      {
        source: "/(.*)", // apply to all routes
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
