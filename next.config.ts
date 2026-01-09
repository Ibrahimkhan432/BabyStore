import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cache1.pakwheels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.pakwheels.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
