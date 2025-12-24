import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/CPAM",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
