import { clsx } from 'clsx'
import type { Viewport } from 'next'
import 'uplord-ui/dist/uplord-ui.css'

import { inter, nunito } from '@/app/fonts'
import NiceModalProvider from '@/context/NiceModalProvider'
import '@/styles/index.scss'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  viewportFit: 'cover',
}

export const metadata = {
  title: 'RS3',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple.png',
  },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body
        className={clsx(inter.className, nunito.className, 'rs3')}
        suppressHydrationWarning>
        <NiceModalProvider>{children}</NiceModalProvider>
      </body>
    </html>
  )
}
