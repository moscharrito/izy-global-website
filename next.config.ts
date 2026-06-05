import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      "/about",
      "/services",
      "/services/it-services",
      "/capabilities",
      "/careers",
      "/contact",
      "/design-system",
    ].map((source) => ({
      source,
      destination: "/",
      permanent: true,
    }));
  },
};

export default nextConfig;
