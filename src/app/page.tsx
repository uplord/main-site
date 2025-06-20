'use client'

import styles from '@/app/page.module.scss'
import { Banner } from '@/components/blocks/Banner'
import { Footer } from '@/components/blocks/Footer'
import { Header } from '@/components/blocks/Header'
import { Projects } from '@/components/blocks/Projects'
import { Section } from '@/components/blocks/Section'
import { Stack } from '@/components/blocks/Stack'
import { Timeline } from '@/components/blocks/Timeline'

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Banner
          id="banner"
          hasHeader
        />
        <Section id="about-me" />
        <Projects id="projects" />
        <Timeline id="timeline" />
        <Stack />
      </main>
      <Footer />
    </div>
  )
}
