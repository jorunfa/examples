/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  // https://nextjs.org/docs/messages/export-image-api
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
