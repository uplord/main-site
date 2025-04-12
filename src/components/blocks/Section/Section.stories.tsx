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
}

export default meta
type Story = StoryObj<SectionProps>

export const Default: Story = {}
