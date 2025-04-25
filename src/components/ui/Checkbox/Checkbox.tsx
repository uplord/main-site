import React from 'react'

import clsx from 'clsx'
import styles from './checkbox.module.scss'

export type CheckboxProps = {
  name: string
  id?: string
  value: string
  checked?: boolean
  helper?: string
  className?: string

  label?: string
  total?: string
  content?: string

  isDisabled?: boolean
  isSkeleton?: boolean
  isError?: boolean

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = ({
  name,
  id,
  value,
  checked,
  helper,
  className = '',

  label,
  total,
  content,

  isDisabled = false,
  isSkeleton = false,
  isError = false,

  onChange,
}: CheckboxProps) => {

  return (
    <div className={styles.field}>
      <div className={clsx(
        styles.checkbox,
        (isDisabled || isSkeleton) && styles['is-disabled'],
        isSkeleton && styles['is-skeleton'],
        isError && styles['is-error'],
      )}>
        <input
          type="checkbox"
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          className={clsx(styles.input, className)}
          checked={checked}
          disabled={isDisabled || isSkeleton}
        />
        <label htmlFor={id || name}>
          <div className={styles.title}>
            {label !== undefined && (
              <div className={styles.label}>
                {!isSkeleton && label}
              </div>
            )}
            {total !== undefined && (
              <div className={styles.total}>
                {!isSkeleton && total}
              </div>
            )}
          </div>
          {content !== undefined && (
            <div className={styles.content}>
              {!isSkeleton && content}
            </div>
          )}
        </label>
      </div>

      {(helper) && (
        <div className={styles.helper}>
          {helper}
        </div>
      )}
    </div>
  )
}
