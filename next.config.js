/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.gamedistribution.com', 'cloud.onlinegames.io', 'www.onlinegames.io', 'picsum.photos'],
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