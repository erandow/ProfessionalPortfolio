import type { NextConfig } from "next";

const config: NextConfig = {
  agentRules: false,
  devIndicators: false,
  outputFileTracingIncludes: {
    "/Erfan-Asadi-Resume.pdf": ["./assets/Erfan-Asadi-Resume.pdf"],
  },
};

export default config;
