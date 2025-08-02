'use client'

import NiceModal, { NiceModalHocProps, useModal } from '@ebay/nice-modal-react'
import { clsx } from 'clsx'
import { useTheme } from 'next-themes'
import React, { FC, useEffect, useState } from 'react'
import { Header, Example, Button, Modal } from 'uplord-ui'
import { useMounted } from 'uplord-ui/lib'

import styles from '../page.module.scss'
import { ContactForm } from '@/components/modals/ContactForm'

const ContactFormModal: FC<NiceModalHocProps> = NiceModal.create(() => {
  const modal = useModal()
  const [submitForm, setSubmitForm] = useState<(() => void) | null>(null)
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  useEffect(() => {
    document.body.classList.add('stop-scroll')
    return () => document.body.classList.remove('stop-scroll')
  }, [])

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
            onClick={() => submitForm?.()}
            isDisabled={isDisabled}
          />
        ),
      }}
      mobileDraggable
      bottomSheet>
      <ContactForm
        setSubmitForm={setSubmitForm}
        setIsDisabled={setIsDisabled}
      />
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
