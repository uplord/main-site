'use client'

import { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { clsx } from 'clsx'
import { Toggle } from '@/components/ui/Toggle'
import { useTheme } from 'next-themes'

export type HeaderProps = {
  id?: string
}

export const Header = ({ id }: HeaderProps) => {
  const { resolvedTheme, setTheme } = useTheme()
  const [toggle, setToggle] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (resolvedTheme) {
      setToggle(resolvedTheme === 'dark')
    }
  }, [resolvedTheme])

  return (
    <div id={id} className={clsx(styles.header, styles['is-home'])}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}><span>M</span>TheMichael</div>
          <div className={styles.nav}>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About me</a></li>
              <li><a href="">Projects</a></li>
              <li><a href="">Timeline</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          <div className={styles.right}>
            <Toggle
              name="toggle"
              value=""
              onChange={(event: any) => {
                const isChecked = event.target.checked
                setToggle(isChecked)
                setTheme(isChecked ? 'dark' : 'light')
              }}
              checked={toggle}
              className={styles.toggle}
              isSkeleton={!mounted}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
