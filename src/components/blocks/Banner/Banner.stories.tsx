import type { Meta, StoryObj } from '@storybook/react'
import { Banner, BannerProps } from '@/components/blocks/Banner'

import { bannerData } from '@/data/data'
const data = bannerData()

const meta: Meta<typeof Banner> = {
  title: 'Blocks/Banner',
  component: Banner,
  args: {
    ...data,
  },
}

export default meta
type Story = StoryObj<BannerProps>

export const Default: Story = {}
