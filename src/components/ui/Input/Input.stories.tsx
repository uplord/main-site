import type { Meta, StoryObj } from '@storybook/react'
import { Formik, Form, Field } from 'formik'
import styles from './input.module.scss'
import { Input, InputProps } from './Input'
import { Variant } from '@/types/system'
import { IconOptions } from '@/lib/icons'

const meta: Meta<InputProps> = {
  title: 'UI/Input',
  component: Input,
  args: {
    type:'text',
    placeholder: '',
    leadingIcon: null,
    leadingText: '',
    trailingIcon: null,
    trailingText: '',
    helper: '',
    className: '',
    isDisabled: false,
    isLoading: false,
    isSkeleton: false,
    isError: false,
  },
  argTypes: {
    leadingIcon: {
      control: {
        type: 'select',
      },
      options: IconOptions,
    },
    leadingFunction: {
      table: {
        disable: true,
      },
    },
    trailingIcon: {
      control: {
        type: 'select',
      },
      options: IconOptions,
    },
    trailingFunction: {
      table: {
        disable: true,
      },
    },
    button: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="padding">
          <Formik
            initialValues={{
              filled: 'Filled'
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500))
              console.log(JSON.stringify(values, null, 2))
            }}
          >
            {() => (
              <Form autoComplete="off" noValidate>
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

type Story = StoryObj<InputProps>

const handleButtonClick = () => {
  console.log('Button Story')
}

export const Default: Story = {
  args: {
    placeholder: 'Testing',
    helper: 'Optional helper text',
  },
  render: (args: InputProps) => (
    <Field
      {...args}
      component={Input}
      name="input"
    />
  ),
}

export const All: Story = {
  args: {
    placeholder: 'Testing',
    leadingIcon: 'User',
    leadingText: '$',
    trailingIcon: 'X',
    trailingText: 'dollars',
    button: {
      label: 'Button',
      variant: Variant.Default,
      onClick: () => handleButtonClick()
    },
    helper: 'Optional helper text',
  },
  render: (args: InputProps) => (
    <Field
      {...args}
      component={Input}
      name="input"
    />
  ),
}

export const State: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args: InputProps) => (
    <div className={styles.fields}>
      <Field
        {...args}
        component={Input}
        name="default"
        placeholder="Default"
        helper="Default"
      />
      <Field
        {...args}
        component={Input}
        name="no-label"
        helper="No label"
      />
      <Field
        {...args}
        component={Input}
        name="hover"
        placeholder="Hover"
        helper="Hover"
        className="hover"
      />
      <Field
        {...args}
        component={Input}
        name="focus"
        placeholder="Focus"
        helper="Focus"
        className="focus-within"
      />
      <Field
        {...args}
        component={Input}
        name="filled"
        placeholder="Filled"
        helper="Filled"
      />
      <Field
        {...args}
        component={Input}
        name="disabled"
        placeholder="Disabled"
        helper="Disabled"
        isDisabled
      />
      <Field
        {...args}
        component={Input}
        name="loading"
        placeholder="Loading"
        helper="Loading"
        isLoading
      />
      <Field
        {...args}
        component={Input}
        name="skeleton"
        placeholder="Skeleton"
        helper="Skeleton"
        isSkeleton
      />
      <Field
        {...args}
        component={Input}
        name="error"
        placeholder="Error"
        helper="Error"
        isError
      />
      <Field
        {...args}
        component={Input}
        name="error-focus"
        placeholder="Error focus"
        helper="Error focus"
        className="focus-within"
        isError
      />

      <Field
        {...args}
        component={Input}
        name="leading-icon"
        placeholder="Leading icon"
        helper="Leading icon"
        leadingIcon="User"
      />

      <Field
        {...args}
        component={Input}
        name="leading-text"
        placeholder="Leading text"
        helper="Leading text"
        leadingText="£"
      />

      <Field
        {...args}
        component={Input}
        name="trailing-icon"
        placeholder="Trailing icon"
        helper="Trailing icon"
        trailingIcon="User"
      />

      <Field
        {...args}
        component={Input}
        name="trailing-text"
        placeholder="Trailing text"
        helper="Trailing text"
        trailingText="metres"
      />

      <Field
        {...args}
        component={Input}
        name="clear"
        placeholder="Clear"
        helper="Clear"
        trailingIcon="X"
      />

      <Field
        {...args}
        component={Input}
        type="password"
        name="password"
        placeholder="Password"
        helper="Password"
      />

      <Field
        {...args}
        component={Input}
        name="button"
        placeholder="Button"
        button={{
          label: 'Button',
          variant: Variant.Default,
          onClick: () => handleButtonClick()
        }}
        helper="Button"
      />
    </div>
  ),
}
