'use client'

import NiceModal from '@ebay/nice-modal-react'
import { clsx } from 'clsx'
import { useTheme } from 'next-themes'
import React, { FC } from 'react'
import { Header, Example, Button } from 'uplord-ui'
import { useMounted } from 'uplord-ui/lib'

import styles from '@/app/(main)/page.module.scss'
import { ContactFormModal } from '@/components/modals/ContactForm'

export default function TestPage() {
  const mounted = useMounted()
  const { resolvedTheme, setTheme } = useTheme()

  const handleToggleTheme = (theme: 'dark' | 'light') => {
    setTheme(theme)
  }

  return (
    <div className={clsx(styles.page, 'page')}>
      <Header
        id="header"
        theme={resolvedTheme}
        onToggleTheme={handleToggleTheme}
      />
      <main className={styles.main}>
        <div className={styles.section}>
          <div className={styles.container}>
            <Example isSkeleton={!mounted} />
            <Button
              label="Get in touch"
              variant="success"
              size="md"
              isSkeleton={!mounted}
              className={clsx(!mounted && styles.skeleton, styles.button)}
              onClick={() => NiceModal.show(ContactFormModal as FC)}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
