import React from 'react'
import { FieldProps } from 'formik'
import clsx from 'clsx'
import styles from '@/components/ui/Checkbox/checkbox.module.scss'

export type RadioProps = {
  id?: string
  label?: string
  total?: string
  content?: string
  className?: string
  value: string
  isDisabled?: boolean
  isSkeleton?: boolean
  isError?: boolean
} & FieldProps

export const Radio = ({
  field,
  form,
  id = '',
  label,
  total,
  content,
  className = '',
  value,
  isDisabled = false,
  isSkeleton = false,
  isError = false,
}: RadioProps) => {
  const hasError = isError || form.errors[field.name] && form.touched[field.name]
  const errorMessage = hasError
  ? isError
    ? 'Error message'
    : Array.isArray(form.errors[field.name])
      ? (form.errors[field.name] as string[]).join(', ')
      : (form.errors[field.name] as string)
  : undefined

  return (
    <div className={styles.field}>
      <div className={clsx(
        styles.radio,
        (isDisabled || isSkeleton) && styles['is-disabled'],
        isSkeleton && styles['is-skeleton'],
        hasError && styles['is-error'],
      )}>
        <input
          {...field}
          type="radio"
          id={id || field.name}
          value={value}
          checked={value === field.value}
          className={clsx(styles.input, className)}
          disabled={isDisabled || isSkeleton}
        />
        <label htmlFor={id || field.name}>
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
      {(errorMessage) && (
        <div className={styles.helper}>{errorMessage}</div>
      )}
    </div>
  )
}
