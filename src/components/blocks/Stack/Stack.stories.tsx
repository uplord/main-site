import type { Meta, StoryObj } from '@storybook/react'
import { Stack, StackProps } from '@/components/blocks/Stack'

const meta: Meta<typeof Stack> = {
  title: 'Blocks/Stack',
  component: Stack,
}

export default meta
type Story = StoryObj<StackProps>

export const Default: Story = {}
