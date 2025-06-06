import { clsx } from 'clsx'
import React from 'react'

import styles from './style.module.scss'
import HungrrrIcon from '@/../public/icons/hungrrr-logo.svg'
import LeaselocoIcon from '@/../public/icons/leaseloco.svg'
import MtcIcon from '@/../public/icons/mtc-logo.svg'
import SnappyIcon from '@/../public/icons/snappy-logo.svg'
import { timelineData } from '@/data/data'
import { useMounted } from '@/lib/useMounted'

export type TimelineProps = {
  id?: string
}

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  leaseloco: LeaselocoIcon,
  'snappy-logo': SnappyIcon,
  'hungrrr-logo': HungrrrIcon,
  'mtc-logo': MtcIcon,
}

export const Timeline = ({ id }: TimelineProps) => {
  const mounted = useMounted()
  const data = timelineData()
  const skeletonClass = !mounted ? styles.skeleton : ''

  return (
    <div
      id={id}
      className={styles.timeline}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h3 className={skeletonClass}>My timeline</h3>
          <h2 className={skeletonClass}>Explore key roles and milestones over the years</h2>
        </div>

        <div className={styles.list}>
          {data.map((item, index) => {
            const IconComponent = iconMap[item.icon]

            return (
              <div
                key={index}
                className={styles.item}>
                <div className={styles.left}>
                  <span className={clsx(styles.dot, skeletonClass)}></span>
                  <div className={styles.text}>
                    <h4 className={skeletonClass}>{item.date}</h4>
                    {IconComponent && (
                      <IconComponent
                        height="32"
                        className={skeletonClass}
                      />
                    )}
                  </div>
                </div>
                <div className={styles.right}>
                  <h3 className={skeletonClass}>{item.location}</h3>
                  <h5 className={skeletonClass}>{item.role}</h5>
                  {item.description.map((paragraph, i) => (
                    <p
                      key={i}
                      className={skeletonClass}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
