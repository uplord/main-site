import type { Meta, StoryObj } from '@storybook/nextjs'

import styles from '@/app/page.module.scss'
import { Banner } from '@/components/blocks/Banner'
import { Footer } from '@/components/blocks/Footer'
import { Header } from '@/components/blocks/Header'
import { Projects } from '@/components/blocks/Projects'
import { Section } from '@/components/blocks/Section'
import { Stack } from '@/components/blocks/Stack'
import { Timeline } from '@/components/blocks/Timeline'

const meta: Meta<typeof Banner> = {
  title: 'Pages/Home',
  component: Banner,
  args: {
    hasHeader: true,
  },
  parameters: {
    backgrounds: { disable: true },
  },
}

type PageProps = {
  hasHeader?: boolean
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: (args: PageProps) => {
    return (
      <div className={styles.page}>
        {args.hasHeader && <Header />}
        <main className={styles.main}>
          <Banner hasHeader={args.hasHeader} />
          <Section />
          <Projects />
          <Timeline />
          <Stack />
        </main>
        <Footer />
      </div>
    )
  },
}
