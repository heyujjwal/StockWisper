import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
const path = require('path');

module.exports = {
  distDir: path.join('custom_build'),
};

export default nextConfig;
