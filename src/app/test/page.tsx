'use client';

import styles from '../page.module.scss'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Checkbox } from '@/components/ui/Checkbox'
import { Radio } from '@/components/ui/Radio'
import { FormikInput } from '@/components/ui/FormikInput'
import { Size, Variant } from '@/types/system'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

const validationSchema = Yup.object().shape({
  // input: Yup.string()
  //   .required('This field is required'),
  // checkbox1: Yup.boolean()
  //   .oneOf([true], 'This field is required'),
})

export default function TestPage() {

  const [checkbox, setCheckbox] = useState(true)
  const [selectedRadio, setSelectedRadio] = useState('car')

  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <div className={styles.container}>
          <Checkbox
            name="checkbox"
            value="Car"
            label="label"
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
          />

          <Radio
            name="radio"
            id="radio1"
            value="car"
            label="Car"
            checked={selectedRadio === 'car'}
            onChange={(e) => setSelectedRadio(e.target.value)}
          />

          <Radio
            name="radio"
            id="radio2"
            value="bus"
            label="Bus"
            checked={selectedRadio === 'bus'}
            onChange={(e) => setSelectedRadio(e.target.value)}
          />

          <Formik
            initialValues={{
              checkbox1: true,
              radio3: 'car',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              console.log(1111)
              await new Promise((r) => setTimeout(r, 500))
              console.log(JSON.stringify(values, null, 2))
            }}
          >
            {({ submitForm }) => (
              <Form autoComplete="off" noValidate>
                <Field
                  component={FormikInput}
                  input={Checkbox}
                  name="checkbox1"
                  label="Input"
                />

                <Field
                  component={FormikInput}
                  input={Radio}
                  name="radio3"
                  id="radio3"
                  value="car"
                  label="Car"
                />

                <Field
                  component={FormikInput}
                  input={Radio}
                  name="radio3"
                  id="radio4"
                  value="bus"
                  label="Bus"
                />

                <Button
                  label="Submit"
                  size={Size.Medium}
                  variant={Variant.Primary}
                  onClick={() => {submitForm()}}
                />
              </Form>
            )} 
          </Formik>
        </div>
      </div>
    </main>
  );
}
