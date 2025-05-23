'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './style.module.scss'
import { clsx } from 'clsx'
import { Toggle } from '@/components/ui/Toggle'
import { useTheme } from 'next-themes'
import { useMounted } from '@/lib/useMounted'

export type HeaderProps = {
  id?: string
}

export const Header = ({ id }: HeaderProps) => {
  const { resolvedTheme, setTheme } = useTheme()
  const [darkMode, setDarkMode] = useState(false)
  const mounted = useMounted()

  useEffect(() => {
    if (resolvedTheme) {
      setDarkMode(resolvedTheme === 'dark')
    }
  }, [resolvedTheme])

  return (
    <div id={id} className={clsx(styles.header, styles['is-home'])}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Link href="/" className={clsx(styles.logo)}>
            <span className={clsx(styles.icon, !mounted && styles.skeleton)}>M</span>
            <span className={clsx(styles.title, !mounted && styles.skeleton)}>TheMichael</span>
          </Link>
          <div className={clsx(styles.nav, !mounted && styles.skeleton)}>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">About me</Link></li>
              <li><Link href="/">Projects</Link></li>
              <li><Link href="/">Timeline</Link></li>
              <li><Link href="/">Contact</Link></li>
            </ul>
          </div>
          <div className={styles.right}>
            <Toggle
              name="toggle"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const isChecked = event.target.checked
                setDarkMode(isChecked)
                setTheme(isChecked ? 'dark' : 'light')
              }}
              checked={darkMode}
              className={styles.toggle}
              isSkeleton={!mounted}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
