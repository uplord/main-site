import clsx from 'clsx'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

import styles from '../modal.module.scss'
import { ButtonProps } from '@/components/ui/Button'

export type HeaderProps = {
  title?: string
  subtext?: string
  leading?: React.ReactNode
  trailing?: React.ReactNode
  hasBorder?: boolean
  sheet?: boolean
}

const isAnchorButton = (node: React.ReactNode): node is React.ReactElement<ButtonProps> => {
  return React.isValidElement<ButtonProps>(node) && node.props?.variant === 'anchor'
}

export const Header = ({
  title = '',
  subtext = '',
  leading,
  trailing,
  hasBorder = true,
  sheet = false,
}: HeaderProps) => {
  const isMobile = useMediaQuery({ maxWidth: 743 })
  const hasAnchorLeading = isAnchorButton(leading)
  const hasAnchorTrailing = isAnchorButton(trailing)

  return (
    <div
      className={clsx(
        styles.header,
        hasBorder && styles.border,
        sheet && !isMobile && styles.sheet,
      )}>
      {!sheet && leading && !isMobile && (
        <div className={clsx(styles.left, hasAnchorLeading && styles.anchor)}>{leading}</div>
      )}

      {(title || subtext) && (
        <div className={styles.top}>
          <div className={styles.title}>{title}</div>
          {subtext && <div className={styles.subtext}>{subtext}</div>}
        </div>
      )}

      {trailing && (
        <div className={clsx(styles.right, hasAnchorTrailing && styles.anchor)}>{trailing}</div>
      )}
    </div>
  )
}
