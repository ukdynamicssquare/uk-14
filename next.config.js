/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Still safe (default in Next 14)
  swcMinify: true,

  // Keep SEO URLs consistent
  trailingSlash: true,

  // Recommended for production / Docker
  output: "standalone",

  // Image optimization (FIXED)
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blognew.dynamicssquare.co.uk",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blognew.dynamicssquare.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.gemsroot.com",
        pathname: "/**",
      },
    ],
    // Enable only if needed
    // unoptimized: true,
  },

  // Public env variable (frontend safe)
  env: {
    NEXT_PUBLIC_BACKEND_URL: "https://blognew.dynamicssquare.co.uk",
  },

  // Security headers (production safe)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Keep during migration, remove later
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
