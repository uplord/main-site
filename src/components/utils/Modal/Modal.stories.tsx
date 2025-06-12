import NiceModal, { useModal } from '@ebay/nice-modal-react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { clsx } from 'clsx'

import { Modal, ModalProps, Header, HeaderProps, Footer, FooterProps } from '../Modal'
import styles from './modal.module.scss'
import { Button, ButtonGroup, ButtonProps } from '@/components/ui/Button'

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

const ButtonOpenModal = NiceModal.create((props: ModalProps) => {
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
      mobileDraggable>
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
    onClick: () => NiceModal.show(ButtonOpenModal),
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

const SheetModal = NiceModal.create((props: ModalProps) => {
  const modal = useModal()
  return (
    <Modal
      {...props}
      modal={modal}
      sheet
      headerProps={{
        title: 'Sheet modal',
        trailing: (
          <Button
            leadingIcon="X"
            variant="anchor"
            size="sm"
            className={styles.anchor}
            onClick={() => modal.hide()}
          />
        ),
        hasBorder: true,
        sheet: true,
      }}
      footerProps={{
        title: 'Title',
        subtext: 'Subtext',
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
      bottomSheet
      mobileDraggable>
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

export const Sheet: StoryObj<ButtonProps> = {
  args: {
    label: 'Open',
    variant: 'primary',
    size: 'md',
    onClick: () => NiceModal.show(SheetModal),
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

const MobileBottomModal = NiceModal.create((props: ModalProps) => {
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
      bottomSheet
      mobileDraggable>
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

export const MobileBottom: StoryObj<ButtonProps> = {
  args: {
    label: 'Open',
    variant: 'primary',
    size: 'md',
    onClick: () => NiceModal.show(MobileBottomModal),
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

const PreventCloseModal = NiceModal.create((props: ModalProps) => {
  const modal = useModal()
  return (
    <Modal
      {...props}
      modal={modal}
      backdropClose={false}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula tempor gravida.
        Integer ac ligula luctus, consectetur nunc non, sagittis ipsum. Suspendisse vitae mattis
        leo. Maecenas a felis nec tortor molestie semper. Donec fermentum diam sollicitudin, ornare
        neque a, egestas quam. Pellentesque et nisl vitae enim scelerisque eleifend eu quis ipsum.
        Suspendisse potenti. Nulla in augue at odio imperdiet dapibus et nec risus. Nam elementum mi
        ut tellus bibendum, nec scelerisque urna blandit. Duis egestas risus neque, rutrum ultrices
        dui vehicula vitae.
      </p>
      <ButtonGroup>
        <Button
          label="Close modal"
          variant="outline"
          size="sm"
          onClick={() => modal.hide()}
        />
      </ButtonGroup>
    </Modal>
  )
})

export const PreventClose: StoryObj<ButtonProps> = {
  args: {
    label: 'Open',
    variant: 'primary',
    size: 'md',
    onClick: () => NiceModal.show(PreventCloseModal),
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

export const HeaderModal: StoryObj = {
  args: {
    title: 'Title',
    subtext: 'Subtext',
    leading: (
      <Button
        leadingIcon="X"
        variant="anchor"
        size="sm"
        className={styles.anchor}
        onClick={() => console.log('Close')}
      />
    ),
    trailing: (
      <Button
        leadingIcon="X"
        variant="anchor"
        size="sm"
        className={styles.anchor}
        onClick={() => console.log('Close')}
      />
    ),
  },
  render: (args: HeaderProps) => <Header {...args} />,
}

export const FooterModal: StoryObj = {
  args: {
    title: 'Title',
    subtext: 'Subtext',
    leading: (
      <Button
        label="Back"
        variant="anchor"
        size="md"
        className={clsx(styles.anchor, styles.button)}
        onClick={() => console.log('Close')}
      />
    ),
    trailing: (
      <Button
        label="Submit"
        variant="primary"
        size="md"
        className={styles.button}
        onClick={() => console.log('Submit')}
      />
    ),
    fullWidth: false,
    hasBorder: true,
    hasShadow: false,
  },
  render: (args: FooterProps) => <Footer {...args} />,
}

export const ModalOpen: StoryObj = {
  render: () => {
    return (
      <>
        <Header
          title="Title"
          subtext="Subtext"
          leading={
            <Button
              leadingIcon="X"
              variant="anchor"
              size="sm"
              className={styles.anchor}
              onClick={() => console.log('Close')}
            />
          }
        />
        <div className={styles.scroll}>
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula tempor gravida.
              Integer ac ligula luctus, consectetur nunc non, sagittis ipsum. Suspendisse vitae
              mattis leo. Maecenas a felis nec tortor molestie semper. Donec fermentum diam
              sollicitudin, ornare neque a, egestas quam. Pellentesque et nisl vitae enim
              scelerisque eleifend eu quis ipsum. Suspendisse potenti. Nulla in augue at odio
              imperdiet dapibus et nec risus. Nam elementum mi ut tellus bibendum, nec scelerisque
              urna blandit. Duis egestas risus neque, rutrum ultrices dui vehicula vitae.
            </p>
          </div>
        </div>
        <Footer
          leading={
            <Button
              label="Back"
              variant="anchor"
              size="md"
              className={clsx(styles.anchor, styles.button)}
              onClick={() => console.log('Close')}
            />
          }
          trailing={
            <Button
              label="Submit"
              variant="primary"
              size="md"
              className={styles.button}
              onClick={() => console.log('Submit')}
            />
          }
        />
      </>
    )
  },
}
