'use client'

import { useTheme } from 'next-themes'
import { Header, Footer, Banner, Projects, Section, Stack, Timeline } from 'uplord-ui'

import styles from '@/app/page.module.scss'

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme()

  const handleToggleTheme = (theme: 'dark' | 'light') => {
    setTheme(theme)
  }

  return (
    <div className={styles.page}>
      <Header
        theme={resolvedTheme}
        onToggleTheme={handleToggleTheme}
      />
      <main className={styles.main}>
        <Banner
          id="banner"
          hasHeader
        />
        <Section id="about-me" />
        <Projects id="projects" />
        <Timeline id="timeline" />
        <Stack />
      </main>
      <Footer />
    </div>
  )
}
