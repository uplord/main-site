import type { Meta, StoryObj } from '@storybook/react'
import { Timeline, TimelineProps } from '@/components/blocks/Timeline'

const meta: Meta<typeof Timeline> = {
  title: 'Blocks/Timeline',
  component: Timeline,
}

export default meta
type Story = StoryObj<TimelineProps>

export const Default: Story = {}
