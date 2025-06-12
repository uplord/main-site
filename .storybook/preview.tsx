import type { Preview } from '@storybook/nextjs'
import { clsx } from 'clsx'
import { Inter, Nunito } from 'next/font/google'
import React from 'react'

import { ThemeProvider } from '../src/context/ThemeProvider'
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
      options: {
        dark: { name: 'Dark', value: '#0d0d0d' },
        light: { name: 'Light', value: '#fff' },
      },
    },
    options: {
      storySort: {
        order: [
          'Components',
          'Styleguide',
          'Blocks',
          'Navigation',
          'UI',
          'Utils',
          'Modals',
          'Pages',
        ],
      },
    },
    pseudo: {
      hover: '.hover',
      focus: '.focus',
      focusVisible: '.focus-visible',
      focusWithin: '.focus-within',
      active: '.active',
    },
    chromatic: {
      disableSnapshot: true,
    },
  },

  initialGlobals: {
    theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.backgrounds.value || 'light'

      const excludedStories = [
        'pages-home--default',
        'blocks-header--default',
        'blocks-banner--with-header',
      ]
      const isExcluded = excludedStories.includes(context.id)

      return (
        <ThemeProvider
          attribute="class"
          enableSystem
          defaultTheme="system"
          disableTransitionOnChange
          {...(!isExcluded && { forcedTheme: theme })}>
          <div className={clsx(inter.className, nunito.className)}>
            <Story />
          </div>
        </ThemeProvider>
      )
    },
  ],
}

export default preview
