import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' va.vercel-scripts.com cal.com cdn.cal.com app.cal.com;
  style-src 'self' 'unsafe-inline' cal.com cdn.cal.com app.cal.com;
  img-src 'self' blob: data: avatars.githubusercontent.com storage.efferd.com images.credly.com cal.com app.cal.com;
  font-src 'self' cal.com app.cal.com;
  connect-src 'self' cal.com api.cal.com app.cal.com;
  frame-src cal.com https://cal.com app.cal.com https://app.cal.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self' cal.com app.cal.com;
  frame-ancestors 'none';
  block-all-mixed-content;
  upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  transpilePackages: ["@calcom/atoms"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "storage.efferd.com",
      },
      {
        protocol: "https",
        hostname: "images.credly.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
