import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { timelineData } from '@/data/data'

export type TimelineProps = {
  id?: string
}

export const Timeline = ({ id }: TimelineProps) => {
  const [mounted, setMounted] = useState(false)
  const data = timelineData()

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const skeletonClass = !mounted ? styles.skeleton : ''

  return (
    <div id={id} className={styles.timeline}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h3 className={skeletonClass}>My timeline</h3>
          <h2 className={skeletonClass}>
            Explore key roles and milestones over the years
          </h2>
        </div>

        <div className={styles.list}>
          {data.map((item, index) => (
            <div key={index} className={styles.item}>
              <h4 className={skeletonClass}>{item.date}</h4>
              <h3 className={skeletonClass}>{item.role}</h3>
              <div className={styles.info}>
                {item.description.map((paragraph, i) => (
                  <p key={i} className={skeletonClass}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
