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
    deviceSizes: [320, 420, 743, 1080],
    imageSizes: [250, 500],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                      cleanupIds: false,
                      inlineStyles: false,
                      minifyStyles: false,
                      mergeStyles: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
}

export default nextConfig
