import type { Meta, StoryObj } from '@storybook/nextjs'

import { Button, ButtonGroup, ButtonProps } from './Button'
import { IconOptions } from '@/lib/icons'
import { VariantType } from '@/types/system'

const meta: Meta<ButtonProps> = {
  title: 'UI/Button',
  component: Button,
  args: {
    label: '',
    href: '',
    target: '',
    size: 'md',
    variant: 'default',
    leadingIcon: null,
    trailingIcon: null,
    block: false,
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
      options: ['sm', 'md'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: VariantType,
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
    size: 'md',
    variant: 'primary',
  },
  render: (args: ButtonProps) => (
    <ButtonGroup>
      <Button {...args} />
    </ButtonGroup>
  ),
}

export const Icon: Story = {
  args: {
    size: 'md',
    variant: 'primary',
    leadingIcon: 'ChevronDown',
    'aria-label': 'Icon',
  },
  render: (args: ButtonProps) => (
    <ButtonGroup>
      <Button {...args} />
    </ButtonGroup>
  ),
}

export const Links: Story = {
  args: {
    size: 'md',
    variant: 'primary',
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
    <ButtonGroup>
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
    </ButtonGroup>
  ),
}

export const Variants: Story = {
  args: {
    label: 'Button',
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
    <ButtonGroup>
      <Button
        {...args}
        variant="default"
      />
      <Button
        {...args}
        variant="primary"
      />
      <Button
        {...args}
        variant="success"
      />
      <Button
        {...args}
        variant="outline"
      />
      <Button
        {...args}
        variant="text"
      />
    </ButtonGroup>
  ),
}

export const Default: Story = {
  args: {
    variant: 'default',
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
  render: (args: ButtonProps) => <TestButtons {...args} />,
}

export const Primary: Story = {
  args: {
    variant: 'primary',
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
  render: (args: ButtonProps) => <TestButtons {...args} />,
}

export const Success: Story = {
  args: {
    variant: 'success',
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
  render: (args: ButtonProps) => <TestButtons {...args} />,
}

export const Outline: Story = {
  args: {
    variant: 'outline',
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
  render: (args: ButtonProps) => <TestButtons {...args} />,
}

export const Text: Story = {
  args: {
    variant: 'text',
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
  render: (args: ButtonProps) => <TestButtons {...args} />,
}

const TestButtons = (args: ButtonProps) => {
  return (
    <>
      <ButtonGroup>
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
      </ButtonGroup>
      <ButtonGroup>
        <Button
          {...args}
          leadingIcon="ChevronDown"
          aria-label="Icon"
        />
        <Button
          {...args}
          leadingIcon="ChevronDown"
          className="hover"
          aria-label="Icon"
        />
        <Button
          {...args}
          leadingIcon="ChevronDown"
          className="hover active"
          aria-label="Icon"
        />
        <Button
          {...args}
          leadingIcon="ChevronDown"
          className="focus-visible"
          aria-label="Icon"
        />
        <Button
          {...args}
          leadingIcon="ChevronDown"
          isLoading
          aria-label="Icon"
        />
        <Button
          {...args}
          leadingIcon="ChevronDown"
          isDisabled
          aria-label="Icon"
        />
        <Button
          {...args}
          leadingIcon="ChevronDown"
          isSkeleton
          aria-label="Icon"
        />
      </ButtonGroup>
      <ButtonGroup>
        <Button
          {...args}
          label="Label"
          size="sm"
        />
        <Button
          {...args}
          label="Label"
          size="sm"
          className="hover"
        />
        <Button
          {...args}
          label="Label"
          size="sm"
          className="hover active"
        />
        <Button
          {...args}
          label="Label"
          size="sm"
          className="focus-visible"
        />
        <Button
          {...args}
          label="Label"
          size="sm"
          isLoading
        />
        <Button
          {...args}
          label="Label"
          size="sm"
          isDisabled
        />
        <Button
          {...args}
          label="Label"
          size="sm"
          isSkeleton
        />
      </ButtonGroup>
      <ButtonGroup>
        <Button
          {...args}
          size="sm"
          leadingIcon="ChevronDown"
          aria-label="Icon"
        />
        <Button
          {...args}
          size="sm"
          leadingIcon="ChevronDown"
          className="hover"
          aria-label="Icon"
        />
        <Button
          {...args}
          size="sm"
          leadingIcon="ChevronDown"
          className="hover active"
          aria-label="Icon"
        />
        <Button
          {...args}
          size="sm"
          leadingIcon="ChevronDown"
          className="focus-visible"
          aria-label="Icon"
        />
        <Button
          {...args}
          size="sm"
          leadingIcon="ChevronDown"
          isLoading
          aria-label="Icon"
        />
        <Button
          {...args}
          size="sm"
          leadingIcon="ChevronDown"
          isDisabled
          aria-label="Icon"
        />
        <Button
          {...args}
          size="sm"
          leadingIcon="ChevronDown"
          isSkeleton
          aria-label="Icon"
        />
      </ButtonGroup>
    </>
  )
}
