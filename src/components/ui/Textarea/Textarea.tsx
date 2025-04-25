'use client'

import React, { useRef } from 'react'

import clsx from 'clsx'
import styles from '@/components/ui/Input/input.module.scss'

export type TextareaProps = {
  placeholder?: string
  name: string
  id?: string
  value: string
  helper?: string
  className?: string

  isDisabled?: boolean
  isLoading?: boolean
  isSkeleton?: boolean
  isError?: boolean

  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea = ({
  placeholder = '', 
  name,
  id,
  value,
  helper,
  className = '',

  isDisabled = false,
  isLoading = false,
  isSkeleton = false,
  isError = false,

  onChange,
}: TextareaProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)

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
            ref={inputRef}
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

      </div>

      {(helper) && (
        <div className={styles.helper}>
          {helper}
        </div>
      )}
    </div>
  )
}
