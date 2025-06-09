'use client'

import { clsx } from 'clsx'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import styles from './style.module.scss'
import { Toggle } from '@/components/ui/Toggle'
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
    <div
      id={id}
      className={clsx(styles.header, styles['is-home'])}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Link
            href="/"
            className={clsx(styles.logo)}>
            <span className={clsx(styles.icon, !mounted && styles.skeleton)}>M</span>
            <span className={clsx(styles.title, !mounted && styles.skeleton)}>TheMichael</span>
          </Link>
          <div className={clsx(styles.nav, !mounted && styles.skeleton)}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#about-me">About me</Link>
              </li>
              <li>
                <Link href="/#projects">Projects</Link>
              </li>
              <li>
                <Link href="/#timeline">Timeline</Link>
              </li>
              <li>
                <Link href="mailto:michael@uplord.co.uk">Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <Toggle
              name="toggle"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const isChecked = event.target.checked
                const newTheme = isChecked ? 'dark' : 'light'
                setDarkMode(isChecked)
                setTheme(newTheme)
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
