'use client'

import NiceModal from '@ebay/nice-modal-react'
import { clsx } from 'clsx'
import dynamic from 'next/dynamic'
import React, { FC } from 'react'
import { Header, Example, Button } from 'uplord-ui'

import styles from '../page.module.scss'
import { useMounted } from '@/lib/useMounted'

const ContactFormModal = dynamic(() => import('@/components/modals/ContactForm'), { ssr: false })

export default function TestPage() {
  const mounted = useMounted()

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.section}>
          <div className={styles.container}>
            <Example />
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
