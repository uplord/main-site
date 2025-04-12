import type { Meta, StoryObj } from '@storybook/react'
import { Formik, Form, Field } from 'formik'
import styles from './checkbox.module.scss'
import { Checkbox as Checkbox, CheckboxProps } from './Checkbox'

const meta: Meta<CheckboxProps> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  args: {
    label: '',
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
    value: {
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
              filled: 'true',
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

type Story = StoryObj<CheckboxProps>

export const Default: Story = {
  args: {
    label: 'Checkbox',
  },
  render: (args: CheckboxProps) => (
    <Field
      {...args}
      component={Checkbox}
      name="input1"
      value="true"
    />
  )
}

export const Content: Story = {
  args: {
    label: 'Title',
    total: 'X,XXX',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut metus et erat suscipit facilisis quis eu odio.',
  },
  render: (args: CheckboxProps) => (
    <Field
      {...args}
      component={Checkbox}
      name="input2"
      value="true"
    />
  )
}

export const State: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args: CheckboxProps) => (
    <div className={styles.fields}>
      <Field
        {...args}
        component={Checkbox}
        name="input"
        label="Default"
        value="true"
      />
      <Field
        {...args}
        component={Checkbox}
        name="hover"
        label="Hover"
        value="true"
        className="hover"
      />
      <Field
        {...args}
        component={Checkbox}
        name="focus"
        label="Focus"
        value="true"
        className="focus-visible"
      />
      <Field
        {...args}
        component={Checkbox}
        name="disabled"
        label="Disabled"
        value="true"
        isDisabled
      />
      <Field
        {...args}
        component={Checkbox}
        name="skeleton"
        label="Skeleton"
        value="true"
        isSkeleton
      />
      <Field
        {...args}
        component={Checkbox}
        name="filled"
        label="Filled"
        value="true"
      />
      <Field
        {...args}
        component={Checkbox}
        name="error"
        label="Error"
        value="true"
        isError
      />
      <Field
        {...args}
        component={Checkbox}
        name="focus-error"
        label="Error Focus"
        className="focus-visible"
        value="true"
        isError
      />
    </div>
  )
}

export const StateText: Story = {
  args: {
    label: 'Title',
    total: 'X,XXX',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut metus et erat suscipit facilisis quis eu odio.',
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args: CheckboxProps) => (
    <div className={styles.fields}>
      <Field
        {...args}
        component={Checkbox}
        name="input"
        value="true"
      />
      <Field
        {...args}
        component={Checkbox}
        name="hover"
        className="hover"
        value="true"
      />
      <Field
        {...args}
        component={Checkbox}
        name="focus"
        className="focus"
        value="true"
      />
      <Field
        {...args}
        component={Checkbox}
        name="disabled"
        value="true"
        isDisabled
      />
      <Field
        {...args}
        component={Checkbox}
        name="skeleton"
        value="true"
        isSkeleton
      />
      <Field
        {...args}
        component={Checkbox}
        name="filled"
        value="true"
      />
      <Field
        {...args}
        component={Checkbox}
        name="error"
        value="true"
        isError
      />
      <Field
        {...args}
        component={Checkbox}
        name="focus-error"
        className="focus-visible"
        value="true"
        isError
      />
    </div>
  )
}
