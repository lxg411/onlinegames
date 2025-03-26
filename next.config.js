/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'img.gamedistribution.com', 
      'cloud.onlinegames.io', 
      'www.onlinegames.io', 
      'picsum.photos',
      'images.unsplash.com',
      'via.placeholder.com',
      'placehold.co',
      'onlinegames-rho.vercel.app',
      'vercel.app',
      'localhost'  // 允许本地主机图片
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      }
    ],
    // 仅在开发环境禁用优化
    unoptimized: process.env.NODE_ENV === 'development',
    // 显著提高生产环境图片处理的容忍度
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    path: '/_next/image'
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // 确保环境变量可用于客户端
  env: {
    NEXT_PUBLIC_VERCEL_URL: process.env.VERCEL_URL || '',
    NEXT_PUBLIC_BASE_URL: 'https://onlinegames-rho.vercel.app'
  },
  experimental: {
    // 让Next.js可以检测和加载多种图片格式
    urlImports: ['https://onlinegames-rho.vercel.app'],
  },
};

module.exports = nextConfig; 