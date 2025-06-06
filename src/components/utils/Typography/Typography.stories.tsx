import type { Meta, StoryObj } from '@storybook/react'
import clsx from 'clsx'

import { Typography, TypographyProps } from './Typography'
import styles from './style.module.scss'

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
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
type Story = StoryObj<TypographyProps>

export const Default: Story = {
  args: {
    element: 'p',
    text: 'Typography',
  },
  argTypes: {
    weight: {
      control: 'radio',
      options: ['text-normal', 'text-semibold', 'text-bold'],
      if: { arg: 'element', eq: 'p' },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className={styles.typography}>
          <Story />
        </div>
      )
    },
  ],
}

export const All: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => {
    return (
      <div className={clsx('list', styles.typography)}>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <p>Body</p>

        <p>
          <a href="">Link</a>
        </p>

        <p className={styles['text-bold']}>Bold</p>
        <p className={styles['text-semibold']}>Semibold</p>

        <ol>
          <li>Ordered list</li>
          <li>Ordered list</li>
          <li>Ordered list</li>
        </ol>

        <ul>
          <li>Bullet list</li>
          <li>Bullet list</li>
          <li>Bullet list</li>
        </ul>
      </div>
    )
  },
}
