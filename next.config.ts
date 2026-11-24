import type { NextConfig } from "next";

const config: NextConfig = {
  agentRules: false,
  devIndicators: false,
  experimental: { globalNotFound: true },
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/en" },
        { source: "/work/:path*", destination: "/en/work/:path*" },
      ],
    };
  },
  async redirects() {
    return [
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path+", destination: "/:path+", permanent: true },
    ];
  },
  outputFileTracingIncludes: {
    "/Erfan-Asadi-Resume.pdf": ["./assets/Erfan-Asadi-Resume.pdf"],
  },
};

export default config;
