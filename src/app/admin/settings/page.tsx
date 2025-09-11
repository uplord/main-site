'use client'

import { clsx } from 'clsx'
import React, { useState } from 'react'
import { Button } from 'uplord-ui'

import styles from '@/app/admin//page.module.scss'
import { Header } from '@/app/admin/_components/Header'
import { Sidebar } from '@/app/admin/_components/Sidebar'

export default function Settingsage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={clsx(styles.app, styles.bar, isOpen && styles.open)}>
      <Sidebar
        left={
          <Button
            href="/admin"
            leadingIcon="ArrowLeft"
            size="sm"
            variant="default"
          />
        }
        center={<>Settings</>}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <main className={styles.main}>
        <Header
          left={
            <>
              <Button
                href="/admin"
                leadingIcon="ArrowLeft"
                size="sm"
                variant="outline"
                className={styles.back}
              />
              <span>Settings</span>
            </>
          }
        />
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Settings</h1>
          </div>
        </div>
      </main>
    </div>
  )
}
