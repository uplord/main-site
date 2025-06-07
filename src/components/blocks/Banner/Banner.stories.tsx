import type { Meta, StoryObj } from '@storybook/nextjs'

import styles from '@/app/page.module.scss'
import { Banner, BannerProps } from '@/components/blocks/Banner'
import { Header } from '@/components/blocks/Header'

const meta: Meta<typeof Banner> = {
  title: 'Blocks/Banner',
  component: Banner,
  args: {
    id: 'banner',
  },
}

export default meta
type Story = StoryObj<BannerProps>

export const Default: Story = {}

export const WithHeader: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
  render: () => {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <Banner hasHeader />
        </main>
      </>
    )
  },
}
