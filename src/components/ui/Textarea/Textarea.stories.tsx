import type { Meta, StoryObj } from '@storybook/react'
import { Formik, Form, Field } from 'formik'
import styles from '@/components/ui/Input/input.module.scss'
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
  },
  decorators: [
    (Story, context) => {
      if (context.name === 'Filled' || context.name === 'Register') {
        return (
          <div className="padding">
            <Story />
          </div>
        )
      }

      return (
        <div className="padding">
          <Formik
            initialValues={{
              input: '',
              filled: 'Filled',
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {() => (
              <Form>
                <Story />
              </Form>
            )}
          </Formik>
        </div>
      )
    },
  ],
}

export default meta

type Story = StoryObj<TextareaProps>

export const Default: Story = {
  render: (args: TextareaProps) => (
    <Field
      {...args}
      component={Textarea}
      name="input"
    />
  )
}

export const State: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args: TextareaProps) => (
    <div className={styles.fields}>
      <Field
        {...args}
        component={Textarea}
        name="input"
        helper="Default"
      />
      <Field
        {...args}
        component={Textarea}
        name="hover"
        helper="Hover"
        className="hover"
      />
      <Field
        {...args}
        component={Textarea}
        name="focus"
        helper="Focus"
        className="focus-within"
      />
      <Field
        {...args}
        component={Textarea}
        name="disabled"
        helper="Disabled"
        isDisabled
      />
      <Field
        {...args}
        component={Textarea}
        name="skeleton"
        helper="Skeleton"
        isSkeleton
      />
      <Field
        {...args}
        component={Textarea}
        name="loading"
        helper="Loading"
        isLoading
      />
      <Field
        {...args}
        component={Textarea}
        name="filled"
        helper="Filled"
      />
      <Field
        {...args}
        component={Textarea}
        name="error"
        helper="Error"
        isError
      />
      <Field
        {...args}
        component={Textarea}
        name="error-focus"
        helper="Error Focus"
        className="focus-within"
        isError
      />
    </div>
  )
}
