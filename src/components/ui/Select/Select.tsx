'use client'

import React, { useRef } from 'react'
import { FieldProps } from 'formik'
import clsx from 'clsx'
import styles from '@/components/ui/Input/input.module.scss'

import { Icon } from '@/components/utils/Icon'
import { Size } from '@/types/system'

export type SelectProps = {
  placeholder?: string
  options: { value: string; label: string }[]
  helper?: string
  className?: string
  isDisabled?: boolean
  isLoading?: boolean
  isSkeleton?: boolean
  isError?: boolean
} & FieldProps

export const Select = ({
  field,
  form,
  placeholder = '',
  options,
  helper = '',
  className = '',
  isDisabled = false,
  isLoading = false,
  isSkeleton = false,
  isError = false,
}: SelectProps) => {
  const selectRef = useRef<HTMLSelectElement>(null)
  const hasError = isError || form.errors[field.name] && form.touched[field.name]
  const errorMessage = hasError
  ? Array.isArray(form.errors[field.name])
    ? (form.errors[field.name] as string[]).join(', ')
    : (form.errors[field.name] as string)
  : undefined

  return (
    <div className={clsx(styles.field, styles['no-label'])}>
      <div className={clsx(
          styles.outer,
          className,
          (isDisabled || isLoading || isSkeleton) && styles['is-disabled'],
          (isLoading && !isSkeleton) && styles['is-loading'],
          isSkeleton && styles['is-skeleton'],
          isError && styles['is-error'],
        )}
      >
        {(isLoading && !isSkeleton) && (
          <div className={styles.loading}></div>
        )}

        <div className={clsx(styles.inner)}>
          <select
            {...field}
            ref={selectRef}
            id={field.name}
            className={styles.input}
            disabled={isDisabled}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles['icon-wrap']}>
          <Icon name={'ChevronDown'} size={Size.Medium} className={styles.icon} />
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
