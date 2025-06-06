import { FieldProps } from 'formik'
import React from 'react'

import { CheckboxProps } from '../Checkbox'
import { InputProps } from '../Input'
import { RadioProps } from '../Radio'
import { SelectProps } from '../Select'
import { TextareaProps } from '../Textarea'

type FormikInputProps = FieldProps & {
  helper?: string
  input?: React.ComponentType<CheckboxProps | InputProps | RadioProps | SelectProps | TextareaProps>
  value?: string
}

export const FormikInput = ({
  field,
  form,
  helper,
  input: Component,
  ...props
}: FormikInputProps) => {
  const error = form.errors[field.name]
  const touched = form.touched[field.name]
  const showError = touched && typeof error === 'string'

  if (!Component) {
    return <div>Component not provided</div>
  }

  const commonProps = {
    ...field,
    ...props,
    helper: showError ? error : helper,
    isError: !!showError,
    ...(Component.name === 'Checkbox' && { checked: field.value }),
    ...(Component.name === 'Radio' && { checked: field.value === props.value }),
  }

  return <Component {...commonProps} />
}
