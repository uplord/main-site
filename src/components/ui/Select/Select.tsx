'use client'

import React, { useRef } from 'react'

import clsx from 'clsx'
import styles from '@/components/ui/Input/input.module.scss'

import { Icon } from '@/components/utils/Icon'
import { Size } from '@/types/system'

type Option = { value: string; label: string }

export type SelectProps = {
  placeholder?: string
  options: Option[]
  name: string
  id?: string
  value: string
  helper?: string
  className?: string

  isDisabled?: boolean
  isLoading?: boolean
  isSkeleton?: boolean
  isError?: boolean

  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select = ({
  placeholder = '',
  options,
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
}: SelectProps) => {
  const selectRef = useRef<HTMLSelectElement>(null)

  return (
    <div className={clsx(styles.field, styles['no-label'])}>
      <div
        className={clsx(
          styles.outer,
          className,
          (isDisabled || isLoading || isSkeleton) && styles['is-disabled'],
          isLoading && !isSkeleton && styles['is-loading'],
          isSkeleton && styles['is-skeleton'],
          isError && styles['is-error'],
        )}
      >
        {isLoading && !isSkeleton && <div className={styles.loading}></div>}

        <div className={styles.inner}>
          <select
            ref={selectRef}
            id={id || name}
            name={name}
            value={value}
            onChange={onChange}
            className={styles.input}
            disabled={isDisabled || isLoading || isSkeleton}
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

      {(helper) && (
        <div className={styles.helper}>
          {helper}
        </div>
      )}
    </div>
  )
}
