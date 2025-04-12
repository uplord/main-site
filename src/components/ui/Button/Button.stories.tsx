import type { Meta, StoryObj } from '@storybook/react'

import styles from './button.module.scss'

import { Button, ButtonProps } from './Button'
import { Variant, Size } from '@/types/system'
import { IconOptions } from '@/lib/icons'

const meta: Meta<ButtonProps> = {
  title: 'UI/Button',
  component: Button,
  args: {
    label: '',
    href: '',
    target: '',
    size: Size.Medium,
    variant: Variant.Default,
    leadingIcon: null,
    trailingIcon: null,
    isDisabled: false,
    isLoading: false,
    isSkeleton: false,
  },
  argTypes: {
    target: {
      control: {
        type: 'select',
      },
    },
    size: {
      control: {
        type: 'select',
      },
      options: [Size.Small, Size.Medium]
    },
    variant: {
      control: {
        type: 'select',
      },
      options: Object.values(Variant),
    },
    leadingIcon: {
      control: {
        type: 'select',
      },
      options: IconOptions,
    },
    trailingIcon: {
      control: {
        type: 'select',
      },
      options: IconOptions,
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
					<Story />
				</div>
      )
    },
  ],
}

export default meta

type Story = StoryObj<ButtonProps>

export const Main: Story = {
  args: {
    label: 'Button',
    size: Size.Medium,
    variant: Variant.Primary,
  },
  render: (args: ButtonProps) => (
    <Button
      {...args}
    />
  )
}

export const Icon: Story = {
  args: {
    size: Size.Medium,
    variant: Variant.Primary,
    leadingIcon: 'ChevronDown',
  },
  render: (args: ButtonProps) => (
    <Button
      {...args}
    />
  )
}

export const Links: Story = {
  args: {
    size: Size.Medium,
    variant: Variant.Primary,
  },
  argTypes: {
    href: {
      table: {
        disable: true,
      },
    },
    target: {
      table: {
        disable: true,
      },
    },
  },
  render: (args: ButtonProps) => (
    <div className={styles.group}>
      <Button
        {...args}
        label="Button"
      />
      <Button
        {...args}
        label="Internal Link"
        href="/"
      />
      <Button
        {...args}
        label="External Link"
        href="https://www.leaseloco.com/"
        target="_blank"
      />
    </div>
  )
}

export const Variants: Story = {
  args: {
    label: 'Button'
  },
  argTypes: {
    href: {
      table: {
        disable: true,
      },
    },
    target: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },
  render: (args: ButtonProps) => (
    <div className={styles.group}>
      <Button
        {...args}
        variant={Variant.Default}
      />
      <Button
        {...args}
        variant={Variant.Primary}
      />
      <Button
        {...args}
        variant={Variant.Success}
      />
      <Button
        {...args}
        variant={Variant.Outline}
      />
      <Button
        {...args}
        variant={Variant.Text}
      />
    </div>
  )
}

export const Default: Story = {
  args: {
    variant: Variant.Default
  },
  argTypes: {
    variant: {
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
  render: (args: ButtonProps) => <TestButtons {...args} />
}


export const Primary: Story = {
  args: {
    variant: Variant.Primary
  },
  argTypes: {
    variant: {
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
  render: (args: ButtonProps) => <TestButtons {...args} />
}

export const Success: Story = {
  args: {
    variant: Variant.Success
  },
  argTypes: {
    variant: {
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
  render: (args: ButtonProps) => <TestButtons {...args} />
}

export const Outline: Story = {
  args: {
    variant: Variant.Outline
  },
  argTypes: {
    variant: {
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
  render: (args: ButtonProps) => <TestButtons {...args} />
}

export const Text: Story = {
  args: {
    variant: Variant.Text
  },
  argTypes: {
    variant: {
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
  render: (args: ButtonProps) => <TestButtons {...args} />
}

const TestButtons = (args: ButtonProps) => {
  return (
    <>
      <div className={styles.group}>
        <Button
          {...args}
          label="Label"
        />
        <Button
          {...args}
          label="Label"
          className="hover"
        />
        <Button
          {...args}
          label="Label"
          className="hover active"
        />
        <Button
          {...args}
          label="Label"
          className="focus-visible"
        />
        <Button
          {...args}
          label="Label"
          isLoading
        />
        <Button
          {...args}
          label="Label"
          isDisabled
        />
        <Button
          {...args}
          label="Label"
          isSkeleton
        />
      </div>
      <div className={styles.group}>
        <Button
          {...args}
          leadingIcon="ChevronDown"
        />
        <Button
          {...args}
          leadingIcon="ChevronDown"
          className="hover"
        />
        <Button
          {...args}
          leadingIcon="ChevronDown"
          className="hover active"
        />
        <Button
          {...args}
          leadingIcon="ChevronDown"
          className="focus-visible"
        />
        <Button
          {...args}
          leadingIcon="ChevronDown"
          isLoading
        />
        <Button
          {...args}
          leadingIcon="ChevronDown"
          isDisabled
        />
        <Button
          {...args}
          leadingIcon="ChevronDown"
          isSkeleton
        />
      </div>
      <div className={styles.group}>
        <Button
          {...args}
          label="Label"
          size={Size.Small}
        />
        <Button
          {...args}
          label="Label"
          size={Size.Small}
          className="hover"
        />
        <Button
          {...args}
          label="Label"
          size={Size.Small}
          className="hover active"
        />
        <Button
          {...args}
          label="Label"
          size={Size.Small}
          className="focus-visible"
        />
        <Button
          {...args}
          label="Label"
          size={Size.Small}
          isLoading
        />
        <Button
          {...args}
          label="Label"
          size={Size.Small}
          isDisabled
        />
        <Button
          {...args}
          label="Label"
          size={Size.Small}
          isSkeleton
        />
      </div>
      <div className={styles.group}>
        <Button
          {...args}
          size={Size.Small}
          leadingIcon="ChevronDown"
        />
        <Button
          {...args}
          size={Size.Small}
          leadingIcon="ChevronDown"
          className="hover"
        />
        <Button
          {...args}
          size={Size.Small}
          leadingIcon="ChevronDown"
          className="hover active"
        />
        <Button
          {...args}
          size={Size.Small}
          leadingIcon="ChevronDown"
          className="focus-visible"
        />
        <Button
          {...args}
          size={Size.Small}
          leadingIcon="ChevronDown"
          isLoading
        />
        <Button
          {...args}
          size={Size.Small}
          leadingIcon="ChevronDown"
          isDisabled
        />
        <Button
          {...args}
          size={Size.Small}
          leadingIcon="ChevronDown"
          isSkeleton
        />
      </div>
    </>
  )
}
