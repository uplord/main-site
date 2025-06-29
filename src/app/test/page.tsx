'use client'

import NiceModal, { NiceModalHocProps, useModal } from '@ebay/nice-modal-react'
import { clsx } from 'clsx'
import { useTheme } from 'next-themes'
import React, { FC } from 'react'
import { Header, Example, Button, Modal, ContactForm } from 'uplord-ui'
import { useModalData, useMounted } from 'uplord-ui/lib'

import styles from '../page.module.scss'

export const ContactFormModal: FC<NiceModalHocProps> = NiceModal.create(() => {
  useModalData()
  const modal = useModal()

  return (
    <Modal
      modal={modal}
      headerProps={{
        title: 'Get in touch',
        trailing: (
          <Button
            leadingIcon="X"
            size="sm"
            variant="anchor"
            onClick={() => modal.hide()}
          />
        ),
      }}
      footerProps={{
        trailing: (
          <Button
            label="Submit"
            size="md"
            variant="primary"
            onClick={() => console.log('Submit')}
          />
        ),
      }}
      mobileDraggable
      bottomSheet>
      <ContactForm />
    </Modal>
  )
})

export default function TestPage() {
  const mounted = useMounted()
  const { resolvedTheme, setTheme } = useTheme()

  const handleToggleTheme = (theme: 'dark' | 'light') => {
    setTheme(theme)
  }

  return (
    <div className={styles.page}>
      <Header
        id="header"
        theme={resolvedTheme}
        onToggleTheme={handleToggleTheme}
      />
      <main className={styles.main}>
        <div className={styles.section}>
          <div className={styles.container}>
            <Example isSkeleton={!mounted} />
            <Button
              label="Get in touch"
              variant="success"
              size="md"
              isSkeleton={!mounted}
              className={clsx(!mounted && styles.skeleton, styles.button)}
              onClick={() => NiceModal.show(ContactFormModal as FC)}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
