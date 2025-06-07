import type { Meta, StoryObj } from '@storybook/nextjs'

import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Blocks/Footer',
  component: Footer,
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

type Story = StoryObj<typeof meta>

export const Default: Story = {}
