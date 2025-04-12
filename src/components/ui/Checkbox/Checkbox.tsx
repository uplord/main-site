import React from 'react'
import { FieldProps } from 'formik'
import clsx from 'clsx'
import styles from './checkbox.module.scss'

export type CheckboxProps = {
  label?: string
  total?: string
  content?: string
  className?: string
  value: string
  isDisabled?: boolean
  isSkeleton?: boolean
  isError?: boolean
} & FieldProps

export const Checkbox = ({
  field,
  form,
  label,
  total,
  content,
  className = '',
  value,
  isDisabled = false,
  isSkeleton = false,
  isError = false,
}: CheckboxProps) => {
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
        styles.checkbox,
        (isDisabled || isSkeleton) && styles['is-disabled'],
        isSkeleton && styles['is-skeleton'],
        hasError && styles['is-error'],
      )}>
        <input
          {...field}
          type="checkbox"
          id={field.name}
          value={value}
          checked={Boolean(field.value)}
          className={clsx(styles.input, className)}
          disabled={isDisabled || isSkeleton}
          onChange={(e) => {
            form.setFieldValue(field.name, e.target.checked)
          }}
        />
        <label htmlFor={field.name}>
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
