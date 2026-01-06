/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isProduction ? "/Portfolio" : "",
  assetPrefix: isProduction ? "/Portfolio/" : undefined
};

module.exports = nextConfig;
