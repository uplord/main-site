import React from 'react'
import styles from './style.module.scss'
import { timelineData } from '@/data/data'
import { useMounted } from '@/lib/useMounted'

export type TimelineProps = {
  id?: string
}

export const Timeline = ({ id }: TimelineProps) => {
  const mounted = useMounted()
  const data = timelineData()

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
              <div className={styles.left}>
                <span className={styles.dot}></span>
                <h4 className={skeletonClass}>{item.date}</h4>
                <h3 className={skeletonClass}>{item.location}</h3>
              </div>
              <div className={styles.right}>
                <h5 className={skeletonClass}>{item.role}</h5>
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
