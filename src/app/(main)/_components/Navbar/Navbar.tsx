'use client'

import { clsx } from 'clsx'
import { useRouter } from 'next/navigation'
import { Navbar as Nav, Button, Icon } from 'uplord-ui'

import styles from './navbar.module.scss'
import { useScroll } from '@/lib/scrollUtils'
import { useMounted } from '@/lib/useMounted'

type NavbarProps = {
  activeId: string | null
}

export const Navbar = ({ activeId }: NavbarProps) => {
  const mounted = useMounted()
  const isScrolled = useScroll()
  const router = useRouter()

  return (
    <Nav className={clsx(styles.nav, isScrolled && styles.scroll, !mounted && styles.skeleton)}>
      <Button
        size="md"
        variant="anchor"
        className={clsx(styles.button, activeId === 'banner' && mounted && styles.active)}
        hasPadding={false}
        onClick={() => router.push('/')}>
        <Icon
          name="Home"
          size="md"
        />
        <span>Home</span>
      </Button>
      <Button
        size="md"
        variant="anchor"
        className={clsx(styles.button, activeId === 'about-me' && mounted && styles.active)}
        hasPadding={false}
        onClick={() => router.push('/#about-me')}>
        <Icon
          name="User"
          size="md"
        />
        <span>About me</span>
      </Button>
      <Button
        href="#projects"
        size="md"
        variant="anchor"
        className={clsx(styles.button, activeId === 'projects' && mounted && styles.active)}
        hasPadding={false}>
        <Icon
          name="FileText"
          size="md"
        />
        <span>Projects</span>
      </Button>
      <Button
        href="#timeline"
        size="md"
        variant="anchor"
        className={clsx(styles.button, activeId === 'timeline' && mounted && styles.active)}
        hasPadding={false}>
        <Icon
          name="ChartNoAxesGantt"
          size="md"
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
          size="md"
        />
        <span>Contact</span>
      </Button>
    </Nav>
  )
}
