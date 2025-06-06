import React from 'react'
import type { Preview } from '@storybook/nextjs'
import { Inter, Nunito } from 'next/font/google'
import { clsx } from 'clsx'
import './preview.scss'
import '@/styles/index.scss'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      values: [
        { name: 'Dark', value: '#0d0d0d' },
        { name: 'Light', value: '#fff' },
      ],
      default: 'Light',
    },

    pseudo: {
      hover: '.hover',
      focus: '.focus',
      focusVisible: '.focus-visible',
      focusWithin: '.focus-within',
      active: '.active',
    },

    options: {
      storySort: {
        order: ['Components', 'Styleguide', 'Blocks', 'Navigation', 'UI', 'Utils'],
      }
    },

    chromatic: {
      disableSnapshot: true,
    },
  },
  decorators: [
    (Story, context) => {
      const backgrounds = context.parameters.backgrounds?.values
      const userBackground = context.userGlobals.backgrounds?.value

      const colorName = backgrounds?.find(color => color.value.toLowerCase() === userBackground?.toLowerCase())?.name.toLowerCase() || 'light'
      return (
        <div className={clsx('body', colorName, inter.className, nunito.className)}>
          <Story />
        </div>
      )
    },
  ],
}

export default preview
