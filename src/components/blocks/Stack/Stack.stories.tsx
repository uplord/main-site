import type { Meta, StoryObj } from '@storybook/nextjs'

import { Stack, StackProps } from '@/components/blocks/Stack'

const meta: Meta<typeof Stack> = {
  title: 'Blocks/Stack',
  component: Stack,
  decorators: [
    (Story) => {
      return (
        <div className="padding-y">
          <Story />
        </div>
      )
    },
  ],
}

export default meta
type Story = StoryObj<StackProps>

export const Default: Story = {}
