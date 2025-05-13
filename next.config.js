/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['tibucami.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true
}

module.exports = nextConfig 