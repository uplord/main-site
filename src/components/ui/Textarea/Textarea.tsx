'use client'

import React, { useRef } from 'react'
import { FieldProps } from 'formik'
import clsx from 'clsx'
import styles from '@/components/ui/Input/input.module.scss'

export type TextareaProps = {
  placeholder?: string
  helper?: string
  className?: string
  isDisabled?: boolean
  isLoading?: boolean
  isSkeleton?: boolean
  isError?: boolean
} & FieldProps

export const Textarea = ({
  field,
  form,
  placeholder = '',
  helper = '',
  className = '',
  isDisabled = false,
  isLoading = false,
  isSkeleton = false,
  isError = false,
}: TextareaProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const hasError = isError || form.errors[field.name] && form.touched[field.name]
  const errorMessage = hasError
  ? Array.isArray(form.errors[field.name])
    ? (form.errors[field.name] as string[]).join(', ')
    : (form.errors[field.name] as string)
  : undefined

  const handleFocus = () => inputRef.current?.focus()

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

        <div className={clsx(styles.inner)}>
          <textarea
            {...field}
            ref={inputRef}
            id={field.name}
            value={field.value ?? ''}
            className={styles.input}
            placeholder=" "
            required
            disabled={isDisabled || isLoading || isSkeleton}
          />

          <span className={styles.placeholder}>{placeholder}</span>
        </div>

      </div>

      {(errorMessage || helper) && (
        <div className={styles.helper}>
          {errorMessage ?? helper}
        </div>
      )}
    </div>
  )
}
