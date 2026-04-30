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
        pathname: "/upload/**",
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
      //new code
      // 🧠 Next.js static assets (hashed → safe for 1 year)
    // 🧠 HTML (must NOT be cached long)
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },

      // ⚡ Next.js static files (hashed → 1 year cache)
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },

    // 🖼 Public images (YOU control versioning)
    {
      source: "/:path*(png|jpg|jpeg|webp|avif|svg)",
      headers: [
        {
          key: "Cache-Control",
         value: "public, max-age=0, must-revalidate",
        },
      ],
    },

    // 🔤 Fonts
    {
      source: "/:path*(woff|woff2|ttf|otf)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    //end code

    ];
  },

  

  // Keep during migration, remove later
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
