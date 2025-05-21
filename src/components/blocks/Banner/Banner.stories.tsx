import type { Meta, StoryObj } from '@storybook/react'
import { Banner, BannerProps } from '@/components/blocks/Banner'

const meta: Meta<typeof Banner> = {
  title: 'Blocks/Banner',
  component: Banner,
}

export default meta
type Story = StoryObj<BannerProps>

export const Default: Story = {}
