import { Inter, Nunito } from 'next/font/google'
import 'uplord-ui/dist/uplord-ui.css'

import NiceModalProvider from '@/context/NiceModalProvider'
import { ThemeProvider } from '@/context/ThemeProvider'
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
      <body
        className={`${inter.className} ${nunito.className}`}
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
