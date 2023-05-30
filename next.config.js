/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "*.googleusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
