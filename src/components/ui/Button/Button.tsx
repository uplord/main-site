'use client'

import dynamic from 'next/dynamic'
import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'

import { IconProps } from '@/components/utils/Icon'
import styles from './button.module.scss'
import { Variant, Size } from '@/types/system'

const Icon = dynamic(() => import('@/components/utils/Icon').then((mod) => mod.Icon))

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  label?: string
  href?: string
  target?: '_blank' | '_self' | ''
  size: Size.Small | Size.Medium
  variant: Variant
  leadingIcon?: IconProps['name']
  trailingIcon?: IconProps['name']
  block?: boolean
  className?: string
  isIcon?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  isSkeleton?: boolean
  hasHover?: boolean
}

export const Button = ({
  label,
  href,
  target,
  size = Size.Medium,
  variant,
  leadingIcon,
  trailingIcon,
  block = false,
  className = '',
  isIcon = false,
  isDisabled = false,
  isLoading = false,
  isSkeleton = false,
  hasHover = true,
  ...restProps
}: ButtonProps) => {

  const content = (
    <>
      <span className={styles.content}>
        {leadingIcon && (
          <Icon name={leadingIcon} size={Size.Medium} className={styles.icon} />
        )}
        {label}
        {trailingIcon && (
          <Icon name={trailingIcon} size={Size.Medium} className={styles.icon} />
        )}
      </span>
    </>
  )

  const classes = clsx(
    styles.button,
    styles[`size-${size}`],
    styles[`variant-${variant}`],
    block && styles.block,
    className,
    (isDisabled || isLoading || isSkeleton) && styles['is-disabled'],
    isLoading && styles['is-loading'],
    isSkeleton && styles['is-skeleton'],
    hasHover && styles['has-hover'],
    ((leadingIcon || trailingIcon) && !label || isIcon) && styles['has-icon']
  )

  if (href) {
    return isSkeleton ? (
      <div className={classes}>{content}</div>
    ) : target === '_blank' ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button className={classes}
      type="button"
      disabled={isDisabled || isLoading || isSkeleton}
      onClick={e => {
        if (isLoading) {
          return
        }
        if (restProps.onClick) {
          restProps.onClick(e)
        }
      }}
    >
      {content}
    </button>
  )
}

export type ButtonGroupProps = {
  children: React.ReactNode
  className?: string
  justify?: 'center' | 'start' | 'end'
}

export const ButtonGroup = ({
  children,
  className,
  justify,
}: ButtonGroupProps) => {
  return (
    <div className={clsx(styles.group, className, justify && styles[`justify-${justify}`])}>
      {children}
    </div>
  )
}
