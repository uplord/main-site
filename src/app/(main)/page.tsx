'use client'

import { useTheme } from 'next-themes'
import { Header, Footer, Banner, Projects, Section, Stack, Timeline } from 'uplord-ui'

import { Navbar } from './_components/Navbar'
import styles from './page.module.scss'
import { data } from '@/data'
import { useActiveSection } from '@/lib/useActiveSection'

export default function HomePage() {
  const { resolvedTheme, setTheme } = useTheme()

  const activeId = useActiveSection(['banner', 'about-me', 'projects', 'timeline'])

  const handleToggleTheme = (theme: 'dark' | 'light') => {
    setTheme(theme)
  }

  return (
    <div className={styles.page}>
      <Header
        id="header"
        isHome
        theme={resolvedTheme}
        onToggleTheme={handleToggleTheme}
        activeSection={activeId}
      />
      <main className={styles.main}>
        <Banner
          id="banner"
          data={data.bannerData}
          hasHeader
        />
        <Section
          id="about-me"
          data={data.sectionData}
        />
        <Projects
          id="projects"
          data={data.projectsData}
        />
        <Timeline
          id="timeline"
          data={data.timelineData}
          hasHeader
        />
        <Stack id="stack" />
      </main>
      <Footer />
      <Navbar activeId={activeId} />
    </div>
  )
}
