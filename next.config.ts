import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/totems", destination: "/totems/index.html" },
      { source: "/totems/cotizador", destination: "/totems/cotizador/index.html" },
    ];
  },
};

export default nextConfig;
