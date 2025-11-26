/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/luma-tools",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
