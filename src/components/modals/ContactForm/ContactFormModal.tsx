'use client'

import NiceModal, { NiceModalHocProps, useModal } from '@ebay/nice-modal-react'
import React, { FC, useEffect, useState } from 'react'
import { Button, Modal } from 'uplord-ui'

import styles from './contact-form.module.scss'
import { ContactForm } from '@/components/modals/ContactForm'

export const ContactFormModal: FC<NiceModalHocProps> = NiceModal.create(() => {
  const modal = useModal()
  const [submitForm, setSubmitForm] = useState<(() => void) | null>(null)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  useEffect(() => {
    document.body.classList.add('stop-scroll')
    document.documentElement.classList.add('stop-scroll')

    return () => {
      document.body.classList.remove('stop-scroll')
      document.documentElement.classList.remove('stop-scroll')
    }
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
            className={styles.close}
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
