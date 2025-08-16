'use client'

import { clsx } from 'clsx'
import { useTheme } from 'next-themes'
import { useMediaQuery } from 'react-responsive'
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

import styles from '@/app/page.module.scss'
import { useScroll } from '@/lib/scrollUtils'

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme()
  const isMobile = useMediaQuery({ maxWidth: 743 })
  const isScrolled = useScroll()

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
      />
      <main className={styles.main}>
        <Banner
          id="banner"
          hasHeader
        />
        <Section id="about-me" />
        <Projects id="projects" />
        <Timeline id="timeline" />
        <Stack id="stack" />
      </main>
      <Footer />
      {isMobile && (
        <Navbar className={clsx(styles.nav, isScrolled && styles.scroll)}>
          <Button
            href="/"
            size="md"
            variant="anchor"
            className={styles.button}
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
            className={styles.button}
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
            className={styles.button}
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
            className={styles.button}
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
      )}
    </div>
  )
}
