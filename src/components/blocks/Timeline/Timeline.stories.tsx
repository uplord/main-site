import type { Meta, StoryObj } from '@storybook/react'

import { Timeline, TimelineProps } from '@/components/blocks/Timeline'

const meta: Meta<typeof Timeline> = {
  title: 'Blocks/Timeline',
  component: Timeline,
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
type Story = StoryObj<TimelineProps>

export const Default: Story = {}
