/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.gamedistribution.com', 'cloud.onlinegames.io', 'www.onlinegames.io'],
  },
  eslint: {
    // 在生产构建期间忽略 ESLint 错误
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 