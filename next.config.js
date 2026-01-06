/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProduction ? "/Portfolio" : ""
  },
  basePath: isProduction ? "/Portfolio" : "",
  assetPrefix: isProduction ? "/Portfolio/" : undefined
};

module.exports = nextConfig;
