import clsx from 'clsx'
import React from 'react'

import styles from '../modal.module.scss'

export type FooterProps = {
  title?: string
  subtext?: string
  leading?: React.ReactNode
  trailing?: React.ReactNode
  fullWidth?: boolean
  hasBorder?: boolean
  hasShadow?: boolean
}

export const Footer = ({
  title = '',
  subtext = '',
  leading,
  trailing,
  fullWidth = false,
  hasBorder = true,
  hasShadow = false,
}: FooterProps) => {
  return (
    <div
      className={clsx(
        styles.footer,
        fullWidth && styles.full,
        hasBorder && styles.border,
        hasShadow && styles.shadow,
      )}>
      {(title || subtext || leading) && (
        <div className={styles.left}>
          {title || subtext ? (
            <div className={styles.text}>
              {title && <div className={styles.title}>{title}</div>}
              {subtext && <div className={styles.subtext}>{subtext}</div>}
            </div>
          ) : (
            <div>{leading}</div>
          )}
        </div>
      )}

      {trailing && <div className={styles.right}>{trailing}</div>}
    </div>
  )
}
