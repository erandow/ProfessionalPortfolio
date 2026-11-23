import path from "node:path";
import type { NextConfig } from "next";

const repositoryRoot = path.resolve(import.meta.dirname, "..");

const config: NextConfig = {
  agentRules: false,
  devIndicators: false,
  outputFileTracingRoot: repositoryRoot,
  turbopack: { root: repositoryRoot },
  outputFileTracingIncludes: {
    "/Erfan-Asadi-Resume.pdf": ["../client/public/Erfan-Asadi-Resume.pdf"],
  },
};

export default config;
