'use client'

import styles from '@/app/page.module.scss'
import NiceModal, { useModal } from '@ebay/nice-modal-react'

// import Header from '@/components/styleguide/Header'
// import Footer from '@/components/styleguide/Footer'
// import Banner from '@/components/blocks/Banner'
// import Section from '@/components/blocks/Section'
// import Projects from '@/components/blocks/Projects'
// import Timeline from '@/components/blocks/Timeline'
// import Stack from '@/components/blocks/Stack'

import { Modal, ModalProps } from '@/components/utils/Modal'

import { Button, ButtonProps } from '@/components/ui/Button'
import { Variant, Size } from '@/types/system'

// import banner from '@/data/banner.json'
// import section from '@/data/section.json'
// import projects from '@/data/projects.json'
// import timeline from '@/data/timeline.json'
// import stack from '@/data/stack.json'

export default function Home() {

  const args = {
    children: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel augue commodo, scelerisque nibh a, viverra elit. Aenean id nisl ut leo sagittis cursus id non quam. Nam commodo nibh quis dapibus blandit. Pellentesque in ultricies enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan vestibulum vestibulum. Sed ultrices ex ac fringilla imperdiet. Fusce quis lectus egestas, blandit lectus ac, suscipit libero. Integer viverra placerat dui, eu luctus elit egestas at. Curabitur laoreet vestibulum maximus. In euismod lobortis tortor a sodales. Maecenas eleifend justo id dolor ultricies consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed finibus ipsum nulla, nec placerat dui pulvinar vel. In suscipit, nulla ut bibendum pellentesque, nunc risus dictum lectus, non blandit mi ipsum at ante.</p>,
    headerProps: {
      title: 'Title',
      subtext: 'Subtext',
      hasBorder: true,
      leadingIcon: 'X' as AvailableIcons,
      leadingText: '',
      leadingFunction: () => console.log('Leading clicked'),
      trailingIcon: null,
      trailingText: 'Action',
      trailingFunction: () => console.log('Trailing clicked'),
    },
    footerProps: {
      title: '',
      subtext: '',
      fullWidth: false,
      hasBorder: true,
      hasShadow: false,
      leadingIcon: null,
      leadingText: 'Effacer',
      leadingButton: Variant.Text,
      leadingFunction: () => console.log('Leading clicked'),
      trailingIcon: null,
      trailingText: 'Submit',
      trailingButton: Variant.Primary,
      trailingFunction: () => console.log('Trailing clicked'),
    },
    mobileDraggable: true,
  }

  const TemporaryModal = NiceModal.create((props: ModalProps) => {
    const modal = useModal()
  
    return (
      <Modal
        {...args}
        modal={modal}
      />
    )
  })

  return (
    <div className={styles.page}>
      {/* <Header isHomepage={true} /> */}
      <main className={styles.main}>
        <Button
          label="Open"
          variant={Variant.Primary}
          size={Size.Medium}
          onClick={() => NiceModal.show(TemporaryModal)}
        />
        {/* <Banner
          id="banner"
          title={banner.title}
          subtitle={banner.subtitle}
          buttons={banner.buttons}
          image={banner.image}
          hasHeader={true}
        />
        <Section
          id="about-me"
          title={section.title}
          subtitle={section.subtitle}
          content={section.content}
          buttons={section.buttons}
          image={section.image}
        />
        <Projects id="projects" title={projects.title} list={projects.list} />
        <Timeline
          id="timeline"
          title={timeline.title}
          subtitle={timeline.subtitle}
          content={timeline.content}
          buttons={timeline.buttons}
          list={timeline.list}
          hasHeader={true}
        />
        <Stack id="stack" title={stack.title} list={stack.list} /> */}
      </main>
      {/* <Footer id="footer" /> */}
    </div>
  )
}
