'use client'

import { clsx } from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import {
  Header,
  Navbar,
  Footer,
  Button,
  Icon,
  Banner,
  Projects,
  Section,
  Stack,
  Timeline,
} from 'uplord-ui'

import styles from './page.module.scss'
import { useScroll } from '@/lib/scrollUtils'
import { useMounted } from '@/lib/useMounted'

export default function HomePage() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useMounted()
  const isScrolled = useScroll()
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const sectionsRef = useRef<Record<string, HTMLElement | null>>({})

  const handleToggleTheme = (theme: 'dark' | 'light') => {
    setTheme(theme)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -80% 0px',
        threshold: 0,
      },
    )

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className={styles.page}>
      <Header
        id="header"
        isHome
        theme={resolvedTheme}
        onToggleTheme={handleToggleTheme}
        activeSection={activeSection}
      />
      <main className={styles.main}>
        <Banner
          id="banner"
          hasHeader
          ref={(el: HTMLElement | null) => {
            sectionsRef.current['banner'] = el
          }}
        />
        <Section
          id="about-me"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current['about-me'] = el
          }}
        />
        <Projects
          id="projects"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current['projects'] = el
          }}
        />
        <Timeline
          id="timeline"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current['timeline'] = el
          }}
        />
        <Stack
          id="stack"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current['stack'] = el
          }}
        />
      </main>
      <Footer />
      <Navbar
        className={clsx(styles.nav, isScrolled && styles.scroll, !mounted && styles.skeleton)}>
        <Button
          href="/"
          size="md"
          variant="anchor"
          className={clsx(styles.button, activeSection === 'banner' && mounted && styles.active)}
          hasPadding={false}>
          <Icon
            name="Home"
            size="lg"
          />
          <span>Home</span>
        </Button>
        <Button
          href="#about-me"
          size="md"
          variant="anchor"
          className={clsx(styles.button, activeSection === 'about-me' && mounted && styles.active)}
          hasPadding={false}>
          <Icon
            name="User"
            size="lg"
          />
          <span>About me</span>
        </Button>
        <Button
          href="#projects"
          size="md"
          variant="anchor"
          className={clsx(styles.button, activeSection === 'projects' && mounted && styles.active)}
          hasPadding={false}>
          <Icon
            name="FileText"
            size="lg"
          />
          <span>Projects</span>
        </Button>
        <Button
          href="#timeline"
          size="md"
          variant="anchor"
          className={clsx(styles.button, activeSection === 'timeline' && mounted && styles.active)}
          hasPadding={false}>
          <Icon
            name="ChartNoAxesGantt"
            size="lg"
          />
          <span>Timeline</span>
        </Button>
        <Button
          href="mailto:michael@uplord.co.uk"
          size="md"
          variant="anchor"
          className={styles.button}
          hasPadding={false}>
          <Icon
            name="Mail"
            size="lg"
          />
          <span>Contact</span>
        </Button>
      </Navbar>
    </div>
  )
}
