/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders.concat([
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://contrib.com https://vnoc.com',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, PUT, POST, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type',
          },
        ]),
      },
    ];
  },
};

const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  // ... other security headers
];

module.exports = nextConfig;

