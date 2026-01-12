/** @type {import('next').NextConfig} */
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const trimmedBasePath = rawBasePath.replace(/(^\/+|\/+$)/g, "");
const basePath = trimmedBasePath ? `/${trimmedBasePath}` : "";
const assetPrefix = basePath ? `${basePath}/` : undefined;

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  basePath,
  assetPrefix
};

module.exports = nextConfig;
