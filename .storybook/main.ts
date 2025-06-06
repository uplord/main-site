import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: [
    '../src/**/**/*.mdx',
    '../src/**/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    '@storybook/addon-storysource',
    'storybook-addon-pseudo-states',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    // Remove existing SVG loader
    const fileLoaderRule = config.module?.rules?.find((rule) =>
      rule && typeof rule === 'object' && 'test' in rule && rule.test instanceof RegExp && rule.test.test('.svg')
    )

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i
    }

    // Add SVGR loader for SVGs
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default config
