'use client'

import React, { useRef, useState } from 'react'
import { FieldProps } from 'formik'
import clsx from 'clsx'
import styles from './input.module.scss'

import { Button, ButtonProps } from '@/components/ui/Button'
import { Icon, IconProps } from '@/components/utils/Icon'
import { Variant, Size } from '@/types/system'

export type InputProps = {
  type: 'text' | 'email' | 'password' | 'number'
  placeholder?: string
  leadingIcon?: IconProps['name']
  leadingFunction?: () => void
  leadingText?: string
  trailingIcon?: IconProps['name']
  trailingFunction?: () => void
  trailingText?: string
  button?: Omit<ButtonProps, 'size'> & { size?: Size.Small }
  helper?: string
  className?: string
  isDisabled?: boolean
  isLoading?: boolean
  isSkeleton?: boolean
  isError?: boolean
} & FieldProps

export const Input = ({
  field,
  form,
  type = 'text',
  placeholder = '',
  leadingIcon,
  leadingFunction,
  leadingText = '',
  trailingIcon,
  trailingFunction,
  trailingText = '',
  button,
  helper = '',
  className = '',
  isDisabled = false,
  isLoading = false,
  isSkeleton = false,
  isError = false,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const hasError = isError || form.errors[field.name] && form.touched[field.name]
  const errorMessage = hasError
  ? Array.isArray(form.errors[field.name])
    ? (form.errors[field.name] as string[]).join(', ')
    : (form.errors[field.name] as string)
  : undefined

  const handleFocus = () => inputRef.current?.focus()

  const togglePasswordVisibility = (event: React.MouseEvent) => {
    event.stopPropagation()
    setIsPasswordVisible(prev => !prev)
  }

  const clearField = () => {
    form.setFieldValue(field.name, '')
    form.setFieldTouched(field.name, false)
    form.setFieldError(field.name, undefined)
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
            {...field}
            ref={inputRef}
            type={type === 'password' && isPasswordVisible ? 'text' : type}
            id={field.name}
            value={field.value ?? ''}
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

        {trailingIcon && !(trailingIcon === 'X' && (!field.value || isDisabled)) && (
          <div onClick={trailingFunction || trailingIcon === 'X' ? handleTrailingClick : undefined}
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

      {(errorMessage || helper) && (
        <div className={styles.helper}>
          {errorMessage ?? helper}
        </div>
      )}
    </div>
  )
}
