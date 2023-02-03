/** @type {import('next').NextConfig} */
const nextConfig = {
  "extends": "next",
  "rules": {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off"
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '*/**'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '*/**'
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '*/**'
      },
      {
        protocol: 'https',
        hostname: 'erreizando.com',
        port: '',
        pathname: '*/**'
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '*/**'
      },
    ]
  },
}

module.exports = nextConfig
