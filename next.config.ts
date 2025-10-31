import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/invoices",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
