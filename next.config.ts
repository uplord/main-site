import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `@use '/src/styles/forward' as *;`,
    silenceDeprecations: ['legacy-js-api'],
  },
}

export default nextConfig
