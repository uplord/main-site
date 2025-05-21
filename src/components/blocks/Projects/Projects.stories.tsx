import type { Meta, StoryObj } from '@storybook/react'
import { Projects, ProjectsProps } from '@/components/blocks/Projects'

import { projectsData } from '@/data/data'
const data = projectsData()

const meta: Meta<typeof Projects> = {
  title: 'Blocks/Projects',
  component: Projects,
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
type Story = StoryObj<ProjectsProps>

export const Default: Story = {}
