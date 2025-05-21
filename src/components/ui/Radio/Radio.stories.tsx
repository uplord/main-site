import type { Meta, StoryObj } from '@storybook/react'
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
    checked: {
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

type Story = StoryObj<RadioProps>

export const Default: Story = {
  args: {
    label: 'Radio',
  },
  render: (args: RadioProps) => (
    <div className={styles.fields}>
      <Radio
        {...args}
        id="radio1"
        name="input1"
        value="true"
      />
      <Radio
        {...args}
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
      <Radio
        {...args}
        id="radio3"
        name="input2"
        value="true"
      />
      <Radio
        {...args}
        id="radio4"
        name="input2"
        value="false"
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
  render: (args: RadioProps) => (
    <div className={styles.fields}>
      <Radio
        {...args}
        name="input"
        label="Default"
        value="true"
      />
      <Radio
        {...args}
        name="hover"
        label="Hover"
        value="true"
        className="hover"
      />
      <Radio
        {...args}
        name="focus"
        label="Focus"
        value="true"
        className="focus-visible"
      />
      <Radio
        {...args}
        name="disabled"
        label="Disabled"
        value="true"
        isDisabled
      />
      <Radio
        {...args}
        name="skeleton"
        label="Skeleton"
        value="true"
        isSkeleton
      />
      <Radio
        {...args}
        name="filled"
        label="Filled"
        value="true"
      />
      <Radio
        {...args}
        name="error"
        label="Error"
        value="true"
        isError
      />
      <Radio
        {...args}
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
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args: RadioProps) => (
    <div className={styles.fields}>
      <Radio
        {...args}
        name="input"
        value="true"
      />
      <Radio
        {...args}
        name="hover"
        value="true"
        className="hover"
      />
      <Radio
        {...args}
        name="focus"
        value="true"
        className="focus-visible"
      />
      <Radio
        {...args}
        name="disabled"
        value="true"
        isDisabled
      />
      <Radio
        {...args}
        name="skeleton"
        value="true"
        isSkeleton
      />
      <Radio
        {...args}
        name="filled"
        value="true"
      />
      <Radio
        {...args}
        name="error"
        value="true"
        isError
      />
      <Radio
        {...args}
        name="focus-error"
        className="focus-visible"
        value="true"
        isError
      />
    </div>
  )
}
