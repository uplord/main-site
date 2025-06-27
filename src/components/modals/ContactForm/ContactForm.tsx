import NiceModal, { NiceModalHocProps, useModal } from '@ebay/nice-modal-react'
import { FC, useState } from 'react'
import { Modal, Input, Textarea, Button } from 'uplord-ui'

import styles from './contact-form.module.scss'
import { useModalData } from '@/lib/useModalData'

export const ContactFormModal: FC<NiceModalHocProps> = NiceModal.create(() => {
  useModalData()
  const modal = useModal()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

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
            onClick={() => modal.hide()}
          />
        ),
      }}
      mobileDraggable
      bottomSheet>
      <div className={styles.section}>
        <Input
          placeholder="Full name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          autoComplete="off"
        />
        <Input
          type="email"
          placeholder="Email address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="off"
        />
        <Textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
    </Modal>
  )
})
