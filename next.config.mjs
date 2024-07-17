/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "kitchen-flow-editor",
    "@ant-design/pro-editor",
    "zustand",
    "leva",
  ],
};

export default nextConfig;
