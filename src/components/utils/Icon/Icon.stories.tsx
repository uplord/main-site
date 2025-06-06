import * as icons from 'lucide-react'
import type { Meta, StoryObj } from '@storybook/nextjs'

import { Icon as IconComponent, IconProps } from '@/components/utils/Icon'
import { Size } from '@/types/system'

type AvailableIcons = keyof typeof icons

const meta: Meta<IconProps> = {
  title: 'Utils/Icon',
  component: IconComponent,
  args: {
    name: 'Home',
    size: Size.Large,
    className: '',
  },
  argTypes: {
    name: {
      control: {
        type: 'select',
      },
      options: [null, ...Object.keys(icons)] as AvailableIcons[],
    },
    size: {
      control: {
        type: 'select',
      },
      options: Object.values(Size),
    },
  },
}

export default meta

type Story = StoryObj<IconProps>

export const Icon: Story = {
  render: (args: IconProps) => (
    <div className="padding">
      <IconComponent {...args} />
    </div>
  ),
}
