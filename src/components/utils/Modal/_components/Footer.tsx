import clsx from 'clsx'
import React from 'react'

import styles from '../modal.module.scss'
import { ButtonProps } from '@/components/ui/Button'

export type FooterProps = {
  title?: string
  subtext?: string
  leading?: React.ReactNode
  trailing?: React.ReactNode
  fullWidth?: boolean
  hasBorder?: boolean
  hasShadow?: boolean
}

const isAnchorButton = (node: React.ReactNode): node is React.ReactElement<ButtonProps> => {
  return React.isValidElement<ButtonProps>(node) && node.props?.variant === 'anchor'
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
  const hasAnchorLeading = isAnchorButton(leading)
  const hasAnchorTrailing = isAnchorButton(trailing)

  return (
    <div
      className={clsx(
        styles.footer,
        fullWidth && styles.full,
        hasBorder && styles.border,
        hasShadow && styles.shadow,
      )}>
      {(title || subtext || leading) && (
        <div className={clsx(styles.left, hasAnchorLeading && !title && !subtext && styles.anchor)}>
          {title || subtext ? (
            <div className={styles.text}>
              {title && <div className={styles.title}>{title}</div>}
              {subtext && <div className={styles.subtext}>{subtext}</div>}
            </div>
          ) : (
            <>{leading}</>
          )}
        </div>
      )}

      {trailing && (
        <div className={clsx(styles.right, hasAnchorTrailing && styles.anchor)}>{trailing}</div>
      )}
    </div>
  )
}
