import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Dynamo",
  assetPrefix: "/Dynamo",
};

export default nextConfig;
