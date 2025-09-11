'use client'

import { clsx } from 'clsx'
import React, { useState } from 'react'

import { Header } from '@/app/admin/_components/Header'
import { Sidebar } from '@/app/admin/_components/Sidebar'
import styles from '@/app/admin/page.module.scss'

export default function AdminPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={clsx(styles.app, styles.bar, isOpen && styles.open)}>
      <Sidebar
        center={<>Dashboard</>}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <main className={styles.main}>
        <Header left={<span>Dashboard</span>} />
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Dashboard</h1>
          </div>
        </div>
      </main>
    </div>
  )
}
