/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'img.gamedistribution.com', 
      'cloud.onlinegames.io', 
      'www.onlinegames.io', 
      'picsum.photos',
      'images.unsplash.com',
      'via.placeholder.com',
      'placehold.co'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
    unoptimized: process.env.NODE_ENV === 'development',
    // 显著提高生产环境图片处理的容忍度
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    minimumCacheTTL: 60,
    formats: ['image/webp'],
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
  optimizeFonts: true,
  experimental: {
  },
};

module.exports = nextConfig; 