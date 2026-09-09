import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      }
    ],
  },
  async redirects() {
    return [
      {
        source: "/book-appointment",
        destination: "/appointment",
        permanent: true,
      },
      {
        source: "/coockie-policy",
        destination: "/cookie-policy",
        permanent: true,
      },
      {
        source: "/services/pet-grooming",
        destination: "/services/full-grooming",
        permanent: true,
      },
      {
        source: "/services/pet-bath-spa",
        destination: "/services/bath-spa",
        permanent: true,
      },
      {
        source: "/services/pet-day-care",
        destination: "/services/pet-daycare",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
