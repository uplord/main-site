import type { Meta, StoryObj } from '@storybook/react'

import { Section, SectionProps } from '@/components/blocks/Section'

const meta: Meta<typeof Section> = {
  title: 'Blocks/Section',
  component: Section,
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
type Story = StoryObj<SectionProps>

export const Default: Story = {}
