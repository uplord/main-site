import type { Meta, StoryObj } from '@storybook/react'
import { Formik, Form, Field } from 'formik'
import styles from '@/components/ui/Input/input.module.scss'
import { Select, SelectProps } from './Select'

const meta: Meta<SelectProps> = {
  title: 'UI/Select',
  component: Select,
  args: {
    placeholder: 'Select an option',
    helper: 'Optional helper text',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' }
    ],
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
      if (context.name === 'Filled') {
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
              filled: '3',
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

type Story = StoryObj<SelectProps>

export const Default: Story = {
  render: (args: SelectProps) => (
    <Field
      {...args}
      component={Select}
      name="input"
    />
  )
}

export const State: Story = {
  argTypes: {
    isDisabled: {
      table: {
        disable: true,
      },
    },
    isError: {
      table: {
        disable: true,
      },
    },
    isLoading: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args: SelectProps) => (
    <div className={styles.fields}>
      <Field
        {...args}
        component={Select}
        name="input"
        helper="Default"
      />
      <Field
        {...args}
        component={Select}
        name="hover"
        helper="Hover"
        className="hover"
      />
      <Field
        {...args}
        component={Select}
        name="focus"
        helper="Focus"
        className="focus-within"
      />
      <Field
        {...args}
        component={Select}
        name="disabled"
        helper="Disabled"
        isDisabled
      />
      <Field
        {...args}
        component={Select}
        name="skeleton"
        helper="Skeleton"
        isSkeleton
      />
      <Field
        {...args}
        component={Select}
        name="loading"
        helper="Loading"
        isLoading
      />
      <Field
        {...args}
        component={Select}
        name="filled"
        helper="Filled"
      />
      <Field
        {...args}
        component={Select}
        name="error"
        helper="Error"
        isError
      />
      <Field
        {...args}
        component={Select}
        name="error-focus"
        helper="Error Focus"
        className="focus-within"
        isError
      />
    </div>
  )
}
