'use client'

import dynamic from 'next/dynamic'
import styles from '@/app/page.module.scss'

import { Header } from '@/components/blocks/Header'
import { Footer } from '@/components/blocks/Footer'
import { Banner } from '@/components/blocks/Banner'
import { Section } from '@/components/blocks/Section'
import { Projects } from '@/components/blocks/Projects'
import { Timeline } from '@/components/blocks/Timeline'
import { Stack } from '@/components/blocks/Stack'

// const Projects = dynamic(() => import('@/components/blocks/Projects'), {
//   ssr: false,
// })

export default function Home() {

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Banner hasHeader />
        <Section />
        <Projects />
        <Timeline />
        <Stack />
      </main>
      <Footer />
    </div>
  )
}
