import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `@use '/src/styles/forward' as *;`,
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    minimumCacheTTL: 3600,
    formats: ['image/webp'],
  }
}

export default nextConfig
