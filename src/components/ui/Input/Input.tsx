'use client'

import React, { useRef, useState } from 'react'

import clsx from 'clsx'
import styles from './input.module.scss'

import { Button, ButtonProps } from '@/components/ui/Button'
import { Icon, IconProps } from '@/components/utils/Icon'
import { Variant, Size } from '@/types/system'

export type InputProps = {
  type: 'text' | 'email' | 'password' | 'number'
  placeholder?: string
  name: string
  id?: string
  value: string
  helper?: string
  className?: string

  leadingIcon?: IconProps['name']
  leadingFunction?: () => void
  leadingText?: string
  trailingIcon?: IconProps['name']
  trailingFunction?: () => void
  trailingText?: string
  button?: Omit<ButtonProps, 'size'> & { size?: Size.Small }

  isDisabled?: boolean
  isLoading?: boolean
  isSkeleton?: boolean
  isError?: boolean

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  type = 'text',
  placeholder = '', 
  name,
  id,
  value,
  helper,
  className = '',

  leadingIcon,
  leadingFunction,
  leadingText = '',
  trailingIcon,
  trailingFunction,
  trailingText = '',
  button,

  isDisabled = false,
  isLoading = false,
  isSkeleton = false,
  isError = false,

  onChange,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleFocus = () => inputRef.current?.focus()

  const clearField = () => {
    onChange({
      target: {
        name,
        value: '',
      },
    } as React.ChangeEvent<HTMLInputElement>)
  }

  const togglePasswordVisibility = (event: React.MouseEvent) => {
    event.stopPropagation()
    setIsPasswordVisible(prev => !prev)
  }

  const handleLeadingClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    leadingFunction?.()
  }

  const handleTrailingClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    if (trailingIcon === 'X') clearField()
    trailingFunction?.()
  }
  
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    button?.onClick?.(event)
  }  

  return (
    <div className={clsx(styles.field, !placeholder && styles['no-label'])}>
      <div className={clsx(
        styles.outer,
        className,
        (isDisabled || isLoading || isSkeleton) && styles['is-disabled'],
        (isLoading && !isSkeleton) && styles['is-loading'],
        isSkeleton && styles['is-skeleton'],
        isError && styles['is-error'],
      )}
        onClick={handleFocus}
      >
        {(isLoading && !isSkeleton) && (
          <div className={styles.loading}></div>
        )}

        {leadingIcon && (
          <div onClick={leadingFunction && handleLeadingClick} className={clsx(styles['icon-wrap'], leadingFunction && styles.click)}>
            <Icon name={leadingIcon} size={Size.Medium} className={styles.icon} />
          </div>
        )}

        {leadingText && <div className={styles.text}>{leadingText}</div>}

        <div className={clsx(styles.inner)}>
          <input
            ref={inputRef}
            type={type === 'password' && isPasswordVisible ? 'text' : type}
            id={id || name}
            name={name}
            value={value}
            onChange={onChange}
            className={styles.input}
            placeholder=" "
            required
            disabled={isDisabled || isLoading || isSkeleton}
          /> 
          <span className={styles.placeholder}>{placeholder}</span>
        </div>

        {trailingText && <div className={styles.text}>{trailingText}</div>}

        {type === 'password' && (
          <div onClick={togglePasswordVisibility} className={clsx(styles['icon-wrap'], styles.click)}>
            <Icon name={!isPasswordVisible ? 'EyeOff' : 'Eye'} size={Size.Medium} className={styles.icon} />
          </div>
        )}

        {trailingIcon && !(trailingIcon === 'X' && (!value || isDisabled)) && (
          <div
            onClick={handleTrailingClick}
            className={clsx(styles['icon-wrap'], trailingFunction || trailingIcon === 'X' ? styles.click : '')}
          >
            <Icon name={trailingIcon} size={Size.Medium} className={styles.icon} />
          </div>
        )}

        {button && (
          <Button
            {...button}
            size={Size.Small}
            variant={button.variant || Variant.Primary}
            className={styles.button}
            isDisabled={isDisabled || isLoading || isSkeleton}
            onClick={handleButtonClick}
          />
        )}
      </div>

      {(helper) && (
        <div className={styles.helper}>
          {helper}
        </div>
      )}
    </div>
  )
}
