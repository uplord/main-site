import clsx from 'clsx'
import React from 'react'

import styles from '../modal.module.scss'

export type HeaderProps = {
  title?: string
  subtext?: string
  leading?: React.ReactNode
  trailing?: React.ReactNode
  hasBorder?: boolean
}

export const Header = ({
  title = '',
  subtext = '',
  leading,
  trailing,
  hasBorder = true,
}: HeaderProps) => {
  return (
    <div className={clsx(styles.header, hasBorder && styles.border)}>
      {leading && <div className={styles.left}>{leading}</div>}

      {(title || subtext) && (
        <div className={styles.top}>
          <div className={styles.title}>{title}</div>
          {subtext && <div className={styles.subtext}>{subtext}</div>}
        </div>
      )}

      {trailing && <div className={styles.right}>{trailing}</div>}
    </div>
  )
}
