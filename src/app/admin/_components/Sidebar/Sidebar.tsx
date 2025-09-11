import NiceModal from '@ebay/nice-modal-react'
import { clsx } from 'clsx'
import Link from 'next/link'
import React, { FC, useEffect, useRef, useState } from 'react'
import { Button, Icon } from 'uplord-ui'

import { MenuModal } from '../MenuModal'
import styles from './sidebar.module.scss'

type SidebarProps = {
  left?: React.ReactNode
  center?: React.ReactNode
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export const Sidebar = ({ left, center, isOpen, setIsOpen }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsShown(false)
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
  }, [isOpen, setIsOpen])

  return (
    <div
      ref={sidebarRef}
      className={clsx(styles.sidebar, isShown && styles.shown, 'dark')}>
      <div className={styles.mobile}>
        <div className={styles.left}>
          {left}
          <Link
            href="/admin"
            className={styles.logo}
            aria-label="Logo">
            <span className={styles.icon}>M</span>
          </Link>
        </div>
        <div className={styles.center}>
          {center && <div className={styles.title}>{center}</div>}
        </div>
        <div className={styles.right}>
          <Button
            leadingIcon="Menu"
            size="sm"
            variant="default"
            onClick={() => NiceModal.show(MenuModal as FC)}
          />
        </div>
      </div>

      <div className={styles.desktop}>
        <Link
          href="/admin"
          className={styles.logo}
          aria-label="Logo">
          <span className={styles.icon}>M</span>
        </Link>
        <div className={styles.navigation}>
          <ul className={styles.menu}>
            <li>
              <Button
                href="/admin/"
                size="sm"
                variant="default"
                className={styles.button}>
                <Icon
                  name="LayoutDashboard"
                  size="md"
                />
                <span>Dashboard</span>
              </Button>
            </li>
            <li>
              <Button
                href="/admin/pages"
                size="sm"
                variant="default"
                className={styles.button}>
                <Icon
                  name="StickyNote"
                  size="md"
                />
                <span>Pages</span>
              </Button>
            </li>
          </ul>
          <ul className={clsx(styles.menu, styles.bottom)}>
            <li>
              <Button
                href="/admin/profile"
                size="sm"
                variant="default"
                className={styles.button}>
                <Icon
                  name="User"
                  size="md"
                />
                <span>Profile</span>
              </Button>
            </li>
            <li>
              <Button
                href="/admin/settings"
                size="sm"
                variant="default"
                className={styles.button}>
                <Icon
                  name="Settings"
                  size="md"
                />
                <span>Settings</span>
              </Button>
            </li>
            <li>
              <Button
                size="sm"
                variant="default"
                className={styles.button}
                onClick={() => {
                  if (isOpen) {
                    setIsShown(false)
                    setIsOpen(false)
                  } else {
                    setIsOpen(true)
                    setTimeout(() => setIsShown(true), 300)
                  }
                }}>
                <Icon
                  name={isOpen ? 'ArrowLeftToLine' : 'ArrowRightToLine'}
                  size="md"
                />
                <span>Close</span>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
