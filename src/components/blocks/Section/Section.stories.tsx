import type { Meta, StoryObj } from '@storybook/react'
import { Section, SectionProps } from '@/components/blocks/Section'

import { sectionData } from '@/data/data'
const data = sectionData()

const meta: Meta<typeof Section> = {
  title: 'Blocks/Section',
  component: Section,
  args: {
    ...data,
  },
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
