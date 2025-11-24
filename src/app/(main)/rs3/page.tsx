'use client'

import { clsx } from 'clsx'
import { useEffect, useState } from 'react'

import styles from './page.module.scss'

export default function TestPage() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function load() {
      const res = await fetch(
        'https://apps.runescape.com/runemetrics/profile/profile?user=themichae1',
      )
      const json = await res.json()
      setData(json)
    }
    load()
  }, [])

  const firstSkill = data?.skillvalues?.[0]

  return (
    <div className={clsx(styles.page, 'page')}>
      <main className={styles.main}>
        {/* Display first skillvalues entry */}
        {firstSkill && (
          <div style={{ marginTop: '20px' }}>
            <h2>First Skill</h2>
            <p>
              <strong>Skill ID:</strong> {firstSkill.id}
            </p>
            <p>
              <strong>Level:</strong> {firstSkill.level}
            </p>
            <p>
              <strong>XP:</strong> {firstSkill.xp}
            </p>
            <p>
              <strong>Rank:</strong> {firstSkill.rank}
            </p>
          </div>
        )}

        {!data && <p>Loading...</p>}
      </main>
    </div>
  )
}
