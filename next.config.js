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
      'localhost'
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
    // 在生产环境中禁用图片优化，以避免路径问题
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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