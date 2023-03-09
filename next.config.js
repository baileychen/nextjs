/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "nextjs",
  },
  basePath: "/nextjs",
  assetPrefix: "/nextjs",
};

module.exports = nextConfig;
