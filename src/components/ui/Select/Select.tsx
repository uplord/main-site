'use client'

import React, { useRef } from 'react'
import { FieldProps } from 'formik'
import clsx from 'clsx'
import styles from '@/components/ui/Input/input.module.scss'

import { Icon } from '@/components/utils/Icon'
import { Size } from '@/types/system'

type Option = { value: string; label: string }

export type SelectProps = {
  placeholder?: string
  options: Option[]
  helper?: string
  className?: string
  isDisabled?: boolean
  isLoading?: boolean
  isSkeleton?: boolean
  isError?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  name?: string
} & Partial<FieldProps>

export const Select = ({
  field,
  form,
  name,
  value,
  onChange,
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

  const fieldName = field?.name ?? name ?? ''
  const hasError = isError || (form?.errors?.[fieldName] && form?.touched?.[fieldName])
  const errorMessage = hasError
    ? Array.isArray(form?.errors?.[fieldName])
      ? (form?.errors?.[fieldName] as string[]).join(', ')
      : (form?.errors?.[fieldName] as string)
    : undefined

  const handleChange = field?.onChange ?? onChange

  return (
    <div className={clsx(styles.field, styles['no-label'])}>
      <div
        className={clsx(
          styles.outer,
          className,
          (isDisabled || isLoading || isSkeleton) && styles['is-disabled'],
          isLoading && !isSkeleton && styles['is-loading'],
          isSkeleton && styles['is-skeleton'],
          hasError && styles['is-error'],
        )}
      >
        {isLoading && !isSkeleton && <div className={styles.loading}></div>}

        <div className={styles.inner}>
          <select
            id={fieldName}
            name={fieldName}
            ref={selectRef}
            className={styles.input}
            disabled={isDisabled}
            value={field?.value ?? value}
            onChange={handleChange}
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
          <Icon name="ChevronDown" size={Size.Medium} className={styles.icon} />
        </div>
      </div>

      {(errorMessage || helper) && (
        <div className={styles.helper}>{errorMessage ?? helper}</div>
      )}
    </div>
  )
}
