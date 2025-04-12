import React from 'react'
import clsx from 'clsx'
import styles from './style.module.scss'

export type TypographyProps = {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  weight?: 'text-normal' | 'text-semibold' | 'text-bold'
  text: string
}

export const Typography = ({
  element: Component = 'p',
  weight = 'text-normal',
  text = 'Typography',
}: TypographyProps) => {
  return (
    <Component
      className={clsx(
        Component === 'p' && styles[weight]
      )}
    >
      {text}
    </Component>
  )
}