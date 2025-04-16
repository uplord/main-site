import React from 'react'
import clsx from 'clsx'
import styles from '../modal.module.scss'

import { Button } from '@/components/ui/Button'
import { IconProps } from '@/components/utils/Icon'
import { Variant, Size } from '@/types/system'

export type FooterProps = {
  title?: string
  subtext?: string
  fullWidth?: boolean
  hasBorder?: boolean
  hasShadow?: boolean
  leadingIcon?: IconProps['name']
  leadingText?: string
  leadingButton?: Variant
  leadingFunction?: () => void
  trailingIcon?: IconProps['name']
  trailingText?: string
  trailingButton?: Variant
  trailingFunction?: () => void
}

export const Footer = ({
  title = '',
  subtext = '',
  fullWidth = false,
  hasBorder = true,
  hasShadow = false,
  leadingIcon,
  leadingText,
  leadingButton = Variant.Primary,
  leadingFunction,
  trailingIcon,
  trailingText,
  trailingButton = Variant.Primary,
  trailingFunction,
}: FooterProps) => {

  const leadingFunc = () => {
    leadingFunction?.()
  }

  const trailingFunc = () => {
    trailingFunction?.()
  }

  return (
    <div className={clsx(
      styles.footer,
      fullWidth && styles.full,
      hasBorder && styles.border,
      hasShadow && styles.shadow,
    )}>
      <div className={styles.left}>
        {title || subtext ? (
          <div className={styles.text}>
            {title && (
              <div className={styles.title}>{title}</div>
            )}
            {subtext && (
              <div className={styles.subtext}>{subtext}</div>
            )}
          </div>
        ) : (leadingIcon || leadingText) && (
          <Button
            label={leadingText}
            leadingIcon={leadingIcon}
            variant={leadingButton}
            size={Size.Medium}
            onClick={leadingFunc}
            className={clsx(
              leadingButton === 'text' ? styles.anchor : '',
              styles.button,
            )}
          />
        )}
      </div>

      <div className={styles.right}>
        {(trailingIcon || trailingText) && (
          <Button
            label={trailingText}
            leadingIcon={trailingIcon}
            variant={trailingButton}
            size={Size.Medium}
            onClick={trailingFunc}
            className={clsx(
              trailingButton === 'text' ? styles.anchor : '',
              styles.button,
            )}
          />
        )}
      </div>

    </div>
  )
}
