'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button, Input } from 'uplord-ui'

import styles from '@/app/admin/page.module.scss'

export default function LoginPage() {
  const router = useRouter()

  return (
    <div className={clsx(styles.app)}>
      <main className={styles.main}>
        <div className={clsx(styles.container, styles.center)}>
          <div className={styles.content}>
            <div className={styles.form}>
              <Link
                href="/admin"
                className={styles.logo}
                aria-label="Logo">
                <span className={styles.icon}>M</span>
              </Link>
              <h1>Login</h1>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                autoComplete="off"
                onChange={(e) => console.log('value', e.target.value)}
              />
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                autoComplete="off"
                onChange={(e) => console.log('value', e.target.value)}
              />
              <Button
                label="Submit"
                size="md"
                variant="primary"
                onClick={() => router.push('/admin')}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
