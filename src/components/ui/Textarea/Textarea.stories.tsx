import type { Meta, StoryObj } from '@storybook/react'
import { Formik, Form, Field } from 'formik'
import styles from '@/components/ui/Input/input.module.scss'
import { FormikInput } from '../FormikInput'
import { Textarea, TextareaProps } from './Textarea'

const meta: Meta<TextareaProps> = {
  title: 'UI/Textarea',
  component: Textarea,
  args: {
    placeholder: 'Label',
    helper: 'Optional helper text',
    isLoading: false,
    isSkeleton: false,
    isDisabled: false,
    isError: false,
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="padding">
          <Story />
        </div>
      )
    },
  ],
}

export default meta

type Story = StoryObj<TextareaProps>

export const Default: Story = {
  render: (args: TextareaProps) => (
    <Textarea
      {...args}
      name="input"
    />
  )
}

export const FormikField: Story = {
  args: {
    placeholder: 'Label',
    helper: 'Formik field',
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args: TextareaProps) => (
    <Formik
      initialValues={{
        textarea: ''
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        console.log(JSON.stringify(values, null, 2))
      }}
    >
      {() => (
        <Form autoComplete="off" noValidate>
          <Field
            {...args}
            component={FormikInput}
            input={Textarea}
            name="textarea"
          />
        </Form>
      )}
    </Formik>
  ),
}

export const State: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args: TextareaProps) => (
    <div className={styles.fields}>
      <Textarea
        {...args}
        name="input"
        helper="Default"
        onChange={(e) => console.log(e.target.value)}
      />
      <Textarea
        {...args}
        name="hover"
        helper="Hover"
        className="hover"
        onChange={(e) => console.log(e.target.value)}
      />
      <Textarea
        {...args}
        name="focus"
        helper="Focus"
        className="focus-within"
        onChange={(e) => console.log(e.target.value)}
      />
      <Textarea
        {...args}
        name="disabled"
        helper="Disabled"
        isDisabled
        onChange={(e) => console.log(e.target.value)}
      />
      <Textarea
        {...args}
        name="skeleton"
        helper="Skeleton"
        isSkeleton
        onChange={(e) => console.log(e.target.value)}
      />
      <Textarea
        {...args}
        name="loading"
        helper="Loading"
        isLoading
        onChange={(e) => console.log(e.target.value)}
      />
      <Textarea
        {...args}
        name="filled"
        value="Filled"
        helper="Filled"
        onChange={(e) => console.log(e.target.value)}
      />
      <Textarea
        {...args}
        name="error"
        helper="Error"
        isError
        onChange={(e) => console.log(e.target.value)}
      />
      <Textarea
        {...args}
        name="error-focus"
        helper="Error Focus"
        className="focus-within"
        isError
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  )
}
