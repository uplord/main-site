'use client'

import styles from '@/app/page.module.scss'
import NiceModal, { useModal } from '@ebay/nice-modal-react'

// import Header from '@/components/styleguide/Header'
// import Footer from '@/components/styleguide/Footer'
import { Banner } from '@/components/blocks/Banner'
import { Section } from '@/components/blocks/Section'
import { Projects } from '@/components/blocks/Projects'
import { Timeline } from '@/components/blocks/Timeline'
import { Stack } from '@/components/blocks/Stack'
export default function Home() {

  return (
    <div className={styles.page}>
      {/* <Header isHomepage={true} /> */}
      <main className={styles.main}>
        <Banner />
        <Section />
        <Projects />
        <Timeline />
        <Stack />
      </main>
      {/* <Footer id="footer" /> */}
    </div>
  )
}
