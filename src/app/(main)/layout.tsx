import { clsx } from 'clsx'
import type { Viewport } from 'next'
import 'uplord-ui/dist/uplord-ui.css'

import { inter, nunito } from '@/app/fonts'
import NiceModalProvider from '@/context/NiceModalProvider'
import { ThemeProvider } from '@/context/ThemeProvider'
import '@/styles/index.scss'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  viewportFit: 'cover',
}

export const metadata = {
  title: 'Michael Allen - Front End Developer',
  description:
    'Experienced Front End Developer with 9 years of expertise, showcasing excellent collaboration, organization, and teamwork skills. Passionate about HTML, CSS, and JavaScript, I thrive on creating exceptional websites. My strong analytical, debugging, and problem-solving abilities have successfully served both small and large clients. Always open to exploring new technologies for innovative web solutions.',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <head>
        <meta
          name="theme-color"
          content="#000000"
        />
      </head>
      <body
        className={clsx(inter.className, nunito.className)}
        suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <NiceModalProvider>{children}</NiceModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
