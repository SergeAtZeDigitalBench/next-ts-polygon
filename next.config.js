/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "tecdn.b-cdn.net",
        protocol: "https",
      },
      {
        hostname: "media.rawg.io",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
