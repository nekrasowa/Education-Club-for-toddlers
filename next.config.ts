import type { NextConfig } from 'next'
// import nextI18NextConfig from "./next-i18next.config";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  async redirects() {
    return [
      {
        source: '/ru/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
