import type { Meta, StoryObj } from '@storybook/react'

import { Projects, ProjectsProps } from '@/components/blocks/Projects'

const meta: Meta<typeof Projects> = {
  title: 'Blocks/Projects',
  component: Projects,
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
