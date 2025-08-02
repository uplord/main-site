import * as yup from 'yup'
import { Formik, Form, Field, FormikProps } from 'formik'
import { useEffect, useRef } from 'react'
import { FormikInput, Input, Textarea } from 'uplord-ui'

import styles from './contact-form.module.scss'
import { useRecaptcha } from '@/lib/useRecaptcha'

const siteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY!

export const validationSchema = yup.object({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
})

type ContactFormValues = {
  fullName: string
  email: string
  message: string
}

type ContactFormProps = {
  setSubmitForm: (fn: () => void) => void
  setIsDisabled: (value: boolean) => void
}

export const ContactForm = ({ setSubmitForm, setIsDisabled }: ContactFormProps) => {
  useRecaptcha(siteKey)

  const formikRef = useRef<FormikProps<ContactFormValues>>(null)

  useEffect(() => {
    if (formikRef.current) {
      setSubmitForm(() => formikRef.current!.submitForm)
    }
  }, [setSubmitForm])

  const handleSubmit = async (values: ContactFormValues) => {
    setIsDisabled(true)
    if (!window.grecaptcha) {
      console.warn('reCAPTCHA not loaded')
      return
    }

    try {
      const token = await window.grecaptcha.execute(siteKey, { action: 'contact_form' })
      const response = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, token }),
      })

      const result = await response.json()
      console.log('reCAPTCHA result:', result)
      console.log('Form values:', values)
    } catch (error) {
      setIsDisabled(false)
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className={styles.section}>
      <Formik<ContactFormValues>
        innerRef={formikRef}
        initialValues={{ fullName: '', email: '', message: '' }}
        validationSchema={validationSchema}
        validate={(values) => {
          try {
            validationSchema.validateSync(values, { abortEarly: false })
            setIsDisabled(false)
            return {}
          } catch (err) {
            setIsDisabled(true)
            const errors: Record<string, string> = {}
            if (err instanceof yup.ValidationError) {
              err.inner.forEach((e: yup.ValidationError) => {
                if (e.path) errors[e.path] = e.message
              })
            }
            return errors
          }
        }}
        onSubmit={handleSubmit}>
        {() => {
          return (
            <Form
              autoComplete="off"
              noValidate>
              <div className={styles.section}>
                <Field
                  name="fullName"
                  placeholder="Full name"
                  autoComplete="off"
                  component={FormikInput}
                  input={Input}
                />
                <Field
                  name="email"
                  type="email"
                  placeholder="Email address"
                  autoComplete="off"
                  component={FormikInput}
                  input={Input}
                />
                <Field
                  name="message"
                  placeholder="Message"
                  component={FormikInput}
                  input={Textarea}
                />

                <p className={styles.small}>
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank">
                    Terms of Service
                  </a>{' '}
                  apply.
                </p>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
