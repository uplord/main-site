import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
// import styles from './checkbox.module.scss'
import { Pagination, PaginationProps } from './Pagination'

const meta: Meta<PaginationProps> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  argTypes: {
    totalPages: {
      control: { type: 'number' },
      defaultValue: 7,
      min: 2,
    },
    currentPage: {
      control: { type: 'number' },
      defaultValue: 2,
    },
    setTotalPages: {
      table: {
        disable: true,
      },
    },
    setCurrentPage: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="padding">
          <Story />
        </div>
      )
    },
  ],
}

export default meta

type Story = StoryObj<PaginationProps>

export const Default: Story = {
  args: {
    totalPages: 4,
    currentPage: 2,
  },
  render: (args) => {
    const [totalPages, setTotalPages] = useState(args.totalPages)
    const [currentPage, setCurrentPage] = useState(args.currentPage)

    useEffect(() => {
      setTotalPages(args.totalPages)
    }, [args.totalPages])

    useEffect(() => {
      setCurrentPage(args.currentPage)
    }, [args.currentPage])

    return (
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    )
  },
}
