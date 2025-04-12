import type { Meta, StoryObj } from '@storybook/react'
import { Formik, Form, Field } from 'formik'
import styles from '@/components/ui/Checkbox/checkbox.module.scss'
import { Radio, RadioProps } from './Radio'

const meta: Meta<RadioProps> = {
  title: 'UI/Radio',
  component: Radio,
  args: {
    label: '',
    isSkeleton: false,
    isDisabled: false,
    isError: false,
  },
  decorators: [
    (Story) => {
      return (
        <div className="padding">
          <Formik
            initialValues={{
              input1: 'true',
              input2: 'true',
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

type Story = StoryObj<RadioProps>

export const Default: Story = {
  args: {
    label: 'Radio',
  },
  argTypes: {
    id: {
      table: {
        disable: true,
      }
    },
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
  render: (args: RadioProps) => (
    <div className={styles.fields}>
      <Field
        {...args}
        component={Radio}
        id="radio1"
        name="input1"
        value="true"
      />
      <Field
        {...args}
        component={Radio}
        id="radio2"
        name="input1"
        value="false"
      />
    </div>
  )
}

export const Content: Story = {
  args: {
    label: 'Title',
    total: 'X,XXX',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut metus et erat suscipit facilisis quis eu odio.',
  },
  argTypes: {
    id: {
      table: {
        disable: true,
      }
    },
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
  render: (args: RadioProps) => (
    <div className={styles.fields}>
      <Field
        {...args}
        component={Radio}
        id="radio3"
        name="input2"
        value="true"
      />
      <Field
        {...args}
        component={Radio}
        id="radio4"
        name="input2"
        value="false"
      />
    </div>
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
  },
  render: (args: RadioProps) => (
    <div className={styles.fields}>
      <Field
        {...args}
        component={Radio}
        name="input"
        label="Default"
        value="true"
      />
      <Field
        {...args}
        component={Radio}
        name="hover"
        label="Hover"
        value="true"
        className="hover"
      />
      <Field
        {...args}
        component={Radio}
        name="focus"
        label="Focus"
        value="true"
        className="focus-visible"
      />
      <Field
        {...args}
        component={Radio}
        name="disabled"
        label="Disabled"
        value="true"
        isDisabled
      />
      <Field
        {...args}
        component={Radio}
        name="skeleton"
        label="Skeleton"
        value="true"
        isSkeleton
      />
      <Field
        {...args}
        component={Radio}
        name="filled"
        label="Filled"
        value="true"
      />
      <Field
        {...args}
        component={Radio}
        name="error"
        label="Error"
        value="true"
        isError
      />
      <Field
        {...args}
        component={Radio}
        name="focus-error"
        label="Focus Error"
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
  },
  render: (args: RadioProps) => (
    <div className={styles.fields}>
      <Field
        {...args}
        component={Radio}
        name="input"
        value="true"
      />
      <Field
        {...args}
        component={Radio}
        name="hover"
        value="true"
        className="hover"
      />
      <Field
        {...args}
        component={Radio}
        name="focus"
        value="true"
        className="focus-visible"
      />
      <Field
        {...args}
        component={Radio}
        name="disabled"
        value="true"
        isDisabled
      />
      <Field
        {...args}
        component={Radio}
        name="skeleton"
        value="true"
        isSkeleton
      />
      <Field
        {...args}
        component={Radio}
        name="filled"
        value="true"
      />
      <Field
        {...args}
        component={Radio}
        name="error"
        value="true"
        isError
      />
      <Field
        {...args}
        component={Radio}
        name="focus-error"
        className="focus-visible"
        value="true"
        isError
      />
    </div>
  )
}
