import type { Meta, StoryObj } from '@storybook/react'
import { Formik, Form, Field } from 'formik'
import { useState } from 'react'

import { FormikInput } from '../FormikInput'
import { Input, InputProps } from './Input'
import styles from './input.module.scss'
import { IconOptions } from '@/lib/icons'
import { Variant } from '@/types/system'

const meta: Meta<InputProps> = {
  title: 'UI/Input',
  component: Input,
  args: {
    type: 'text',
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
    <Input
      {...args}
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
      variant: Variant.Primary,
      onClick: () => handleButtonClick(),
    },
    helper: 'Optional helper text',
  },
  render: (args: InputProps) => (
    <Input
      {...args}
      name="input"
    />
  ),
}

export const FormikField: Story = {
  args: {
    placeholder: 'Input',
    helper: 'Formik field',
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args: InputProps) => (
    <Formik
      initialValues={{
        input: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        console.log(JSON.stringify(values, null, 2))
      }}>
      {() => (
        <Form
          autoComplete="off"
          noValidate>
          <Field
            {...args}
            component={FormikInput}
            input={Input}
            name="input"
          />
        </Form>
      )}
    </Formik>
  ),
}

const InputStates = (args: InputProps) => {
  const [inputClear, setInputClear] = useState('')

  return (
    <div className={styles.fields}>
      <Input
        {...args}
        name="default"
        placeholder="Default"
        helper="Default"
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        {...args}
        name="no-label"
        helper="No label"
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        {...args}
        name="hover"
        placeholder="Hover"
        helper="Hover"
        className="hover"
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        {...args}
        name="focus"
        placeholder="Focus"
        helper="Focus"
        className="focus-within"
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        {...args}
        name="filled"
        placeholder="Filled"
        value="Filled"
        helper="Filled"
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        {...args}
        name="disabled"
        placeholder="Disabled"
        helper="Disabled"
        isDisabled
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        {...args}
        name="loading"
        placeholder="Loading"
        helper="Loading"
        isLoading
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        {...args}
        name="skeleton"
        placeholder="Skeleton"
        helper="Skeleton"
        isSkeleton
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        {...args}
        name="error"
        placeholder="Error"
        helper="Error"
        isError
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        {...args}
        name="error-focus"
        placeholder="Error focus"
        helper="Error focus"
        className="focus-within"
        isError
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        {...args}
        name="leading-icon"
        placeholder="Leading icon"
        helper="Leading icon"
        leadingIcon="User"
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        {...args}
        name="leading-text"
        placeholder="Leading text"
        helper="Leading text"
        leadingText="£"
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        {...args}
        name="trailing-icon"
        placeholder="Trailing icon"
        helper="Trailing icon"
        trailingIcon="User"
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        {...args}
        name="trailing-text"
        placeholder="Trailing text"
        helper="Trailing text"
        trailingText="metres"
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        {...args}
        name="clear"
        value={inputClear}
        placeholder="Clear"
        helper="Clear"
        trailingIcon="X"
        onChange={(e) => setInputClear(e.target.value)}
      />
      <Input
        {...args}
        type="password"
        name="password"
        placeholder="Password"
        helper="Password"
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        {...args}
        name="button"
        placeholder="Button"
        button={{
          label: 'Button',
          variant: Variant.Primary,
          onClick: () => handleButtonClick(),
        }}
        helper="Button"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  )
}

export const State: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args: InputProps) => <InputStates {...args} />,
}
