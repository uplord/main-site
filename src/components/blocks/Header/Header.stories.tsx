import type { Meta, StoryObj } from '@storybook/react'
import { Header, HeaderProps } from '@/components/blocks/Header'

const meta: Meta<typeof Header> = {
  title: 'Blocks/Header',
  component: Header,
}

export default meta
type Story = StoryObj<HeaderProps>

export const Default: Story = {}
