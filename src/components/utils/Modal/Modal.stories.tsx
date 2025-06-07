import NiceModal, { useModal } from '@ebay/nice-modal-react'
import type { Meta, StoryObj } from '@storybook/nextjs'

import { Modal, ModalProps } from './Modal'
import styles from './modal.module.scss'
import { Button, ButtonProps } from '@/components/ui/Button'

const meta: Meta = {
  title: 'Utils/Modal',
  decorators: [
    (Story) => (
      <NiceModal.Provider>
        <Story />
      </NiceModal.Provider>
    ),
  ],
}

export default meta

const TemporaryModal = NiceModal.create((props: ModalProps) => {
  const modal = useModal()
  return (
    <Modal
      {...props}
      modal={modal}
      headerProps={{
        title: 'Title',
        subtext: 'Subtext',
        leading: (
          <Button
            leadingIcon="X"
            variant="anchor"
            size="sm"
            className={styles.anchor}
            onClick={() => modal.hide()}
          />
        ),
        hasBorder: true,
      }}
      footerProps={{
        title: 'Test',
        subtext: 'Test',
        leading: (
          <Button
            label="Back"
            variant="anchor"
            size="md"
            className={styles.anchor}
            onClick={() => modal.hide()}
          />
        ),
        trailing: (
          <Button
            label="Submit"
            variant="primary"
            size="md"
            onClick={() => modal.hide()}
          />
        ),
        fullWidth: false,
        hasBorder: true,
        hasShadow: false,
      }}
      bottomSheet={true}
      mobileDraggable={true}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula tempor gravida.
        Integer ac ligula luctus, consectetur nunc non, sagittis ipsum. Suspendisse vitae mattis
        leo. Maecenas a felis nec tortor molestie semper. Donec fermentum diam sollicitudin, ornare
        neque a, egestas quam. Pellentesque et nisl vitae enim scelerisque eleifend eu quis ipsum.
        Suspendisse potenti. Nulla in augue at odio imperdiet dapibus et nec risus. Nam elementum mi
        ut tellus bibendum, nec scelerisque urna blandit. Duis egestas risus neque, rutrum ultrices
        dui vehicula vitae.
      </p>
    </Modal>
  )
})

export const ButtonOpen: StoryObj<ButtonProps> = {
  args: {
    label: 'Open',
    variant: 'primary',
    size: 'md',
    onClick: () => NiceModal.show(TemporaryModal),
  },
  parameters: { controls: { disable: true } },
  render: (args) => <Button {...args} />,
  decorators: [
    (Story) => (
      <div className="padding">
        <Story />
      </div>
    ),
  ],
}
