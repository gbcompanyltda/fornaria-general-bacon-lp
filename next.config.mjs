/** @type {import('next').NextConfig} */

// Em produção o site é servido em https://gbcompanyltda.github.io/fornaria-general-bacon-lp/
// então precisamos prefixar todos os assets com esse subcaminho.
const repo = "fornaria-general-bacon-lp";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repo}` : "";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
