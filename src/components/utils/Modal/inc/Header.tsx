import React from 'react'
import { NiceModalHandler } from '@ebay/nice-modal-react'
import clsx from 'clsx'
import styles from '../modal.module.scss'

import { Button } from '@/components/ui/Button'
import { IconProps } from '@/components/utils/Icon'
import { Variant, Size } from '@/types/system'

export type HeaderProps = {
  title?: string
  subtext?: string
  hasBorder?: boolean
  leadingIcon?: IconProps['name']
  leadingText?: string
  leadingButton?: Variant
  leadingFunction?: () => void
  trailingIcon?: IconProps['name']
  trailingText?: string
  trailingButton?: Variant
  trailingFunction?: () => void
  modal?: NiceModalHandler
}

export const Header = ({
  title = '',
  subtext = '',
  hasBorder = true,
  leadingIcon,
  leadingText,
  leadingButton = Variant.Text,
  leadingFunction,
  trailingIcon,
  trailingText,
  trailingButton = Variant.Text,
  trailingFunction,
  modal,
}: HeaderProps) => {

  const leadingFunc = () => {
    if (modal && leadingIcon === 'X') {
      modal.hide()
    }
    leadingFunction?.()
  }

  const trailingFunc = () => {
    if (modal && trailingIcon === 'X') {
      modal.hide()
    }
    trailingFunction?.()
  }

  return (
    <div className={clsx(
      styles.header,
      hasBorder && styles.border,
    )}>
      <div className={styles.left}>
        {(leadingIcon || leadingText) && (
          <Button
            label={leadingText}
            leadingIcon={leadingIcon}
            variant={leadingButton}
            size={Size.Small}
            onClick={leadingFunc}
            className={clsx(
              leadingButton === 'text' ? styles.anchor : '',
              styles.button,
            )}
            hasHover={false}
          />
        )}
      </div>

      <div className={styles.top}>
        <div className={styles.title}>{title}</div>
        {subtext && (
          <div className={styles.subtext}>{subtext}</div>
        )}
      </div>

      <div className={styles.right}>
        {(trailingIcon || trailingText) && (
          <Button
            label={trailingText}
            leadingIcon={trailingIcon}
            variant={trailingButton}
            size={Size.Small}
            onClick={trailingFunc}
            className={clsx(
              trailingButton === 'text' ? styles.anchor : '',
              styles.button,
            )}
            hasHover={false}
          />
        )}
      </div>

    </div>
  )
}
