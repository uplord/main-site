import { clsx } from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'uplord-ui'

import styles from './header.module.scss'

type HeaderProps = {
  left: React.ReactNode
}

export const Header = ({ left }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.left}>{left}</div>
        <div className={styles.right}>
          <div
            ref={dropdownRef}
            className={clsx(styles.dropdown, isOpen && styles.open)}>
            <Button
              leadingIcon="Menu"
              size="md"
              variant="outline"
              onClick={() => setIsOpen((prev) => !prev)}
            />
            {isOpen && (
              <ul className={styles.container}>
                <li>
                  <Button
                    href="/admin/profile"
                    size="md"
                    variant="anchor"
                    hasPadding={false}
                    className={styles.button}>
                    <span>Profile</span>
                  </Button>
                </li>
                <li>
                  <Button
                    href="/admin/settings"
                    size="md"
                    variant="anchor"
                    hasPadding={false}
                    className={styles.button}>
                    <span>Settings</span>
                  </Button>
                </li>
                <li>
                  <Button
                    href="/admin/login"
                    size="md"
                    variant="anchor"
                    hasPadding={false}
                    className={styles.button}>
                    <span>Logout</span>
                  </Button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
