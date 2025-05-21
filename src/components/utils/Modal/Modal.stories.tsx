import type { Meta, StoryObj } from '@storybook/react'
import NiceModal, { useModal } from '@ebay/nice-modal-react'

import { Modal, ModalProps } from './Modal'
import { Header as HeaderComponent, HeaderProps } from './inc/Header'
import { Footer as FooterComponent, FooterProps } from './inc/Footer'
import { Content } from './inc/Content'

import { Button, ButtonGroup, ButtonProps } from '@/components/ui/Button'
import { Variant, Size } from '@/types/system'
import { IconOptions, AvailableIcons } from '@/lib/icons'

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

const args = {
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

// ---------- Modal Definitions ----------

const TemporaryModal = NiceModal.create((props: ModalProps) => {
  const modal = useModal()
  return (
    <Modal {...args} {...props} modal={modal}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula tempor gravida. Integer ac ligula luctus, consectetur nunc non, sagittis ipsum. Suspendisse vitae mattis leo. Maecenas a felis nec tortor molestie semper. Donec fermentum diam sollicitudin, ornare neque a, egestas quam. Pellentesque et nisl vitae enim scelerisque eleifend eu quis ipsum. Suspendisse potenti. Nulla in augue at odio imperdiet dapibus et nec risus. Nam elementum mi ut tellus bibendum, nec scelerisque urna blandit. Duis egestas risus neque, rutrum ultrices dui vehicula vitae.</p>
    </Modal>
  )
})

const BottomSheet = NiceModal.create((props: ModalProps) => {
  const modal = useModal()
  return (
    <Modal {...args} {...props} modal={modal} mobileDraggable bottomSheet>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula tempor gravida. Integer ac ligula luctus, consectetur nunc non, sagittis ipsum. Suspendisse vitae mattis leo. Maecenas a felis nec tortor molestie semper. Donec fermentum diam sollicitudin, ornare neque a, egestas quam. Pellentesque et nisl vitae enim scelerisque eleifend eu quis ipsum. Suspendisse potenti. Nulla in augue at odio imperdiet dapibus et nec risus. Nam elementum mi ut tellus bibendum, nec scelerisque urna blandit. Duis egestas risus neque, rutrum ultrices dui vehicula vitae.</p>
    </Modal>
  )
})

const PreventCloseModal = NiceModal.create(() => {
  const modal = useModal()
  return (
    <Modal modal={modal} backdropClose={false}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula tempor gravida. Integer ac ligula luctus, consectetur nunc non, sagittis ipsum. Suspendisse vitae mattis leo. Maecenas a felis nec tortor molestie semper. Donec fermentum diam sollicitudin, ornare neque a, egestas quam. Pellentesque et nisl vitae enim scelerisque eleifend eu quis ipsum. Suspendisse potenti. Nulla in augue at odio imperdiet dapibus et nec risus. Nam elementum mi ut tellus bibendum, nec scelerisque urna blandit. Duis egestas risus neque, rutrum ultrices dui vehicula vitae.</p>
      <ButtonGroup justify="center">
        <Button
          label="Close Modal"
          variant={Variant.Outline}
          size={Size.Medium}
          onClick={() => modal.hide()}
        >
          Close
        </Button>
      </ButtonGroup>
    </Modal>
  )
})

// ---------- Header and Footer Stories ----------

type HeaderStory = StoryObj<HeaderProps>
type FooterStory = StoryObj<FooterProps>

const HeaderTemplate: React.FC<HeaderProps> = (args) => {
  const modal = useModal(TemporaryModal)
  return <HeaderComponent {...args} modal={modal} />
}

export const Header: HeaderStory = {
  args: {
    title: 'Title',
    subtext: 'Subtext',
    hasBorder: true,
    leadingIcon: 'X',
    leadingText: '',
    leadingButton: Variant.Text,
    leadingFunction: () => console.log('Leading clicked'),
    trailingIcon: null,
    trailingText: 'Action',
    trailingButton: Variant.Text,
    trailingFunction: () => console.log('Trailing clicked'),
  },
  argTypes: {
    leadingIcon: { control: { type: 'select' }, options: IconOptions },
    leadingButton: { control: { type: 'select' }, options: Object.values(Variant) },
    trailingIcon: { control: { type: 'select' }, options: IconOptions },
    trailingButton: { control: { type: 'select' }, options: Object.values(Variant) },
  },
  render: (args) => <HeaderTemplate {...args} />,
}

export const Footer: FooterStory = {
  args: {
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
    trailingText: 'Action',
    trailingButton: Variant.Primary,
    trailingFunction: () => console.log('Trailing clicked'),
  },
  argTypes: {
    leadingIcon: { control: { type: 'select' }, options: IconOptions },
    leadingText: {},
    leadingButton: { control: { type: 'select' }, options: Object.values(Variant) },
    leadingFunction: { table: { disable: true } },
    trailingIcon: { control: { type: 'select' }, options: IconOptions },
    trailingButton: { control: { type: 'select' }, options: Object.values(Variant) },
    trailingFunction: { table: { disable: true } },
  },
  render: (args) => <FooterComponent {...args} />,
}

// ---------- Button Stories to Open Modals ----------

export const ButtonOpen: StoryObj<ButtonProps> = {
  args: {
    label: 'Open',
    variant: Variant.Primary,
    size: Size.Medium,
    onClick: () => NiceModal.show(TemporaryModal),
  },
  parameters: { controls: { disable: true } },
  render: (args) => <Button {...args} />,
  decorators: [(Story) => <div className="padding"><Story /></div>],
}

export const MobileBottomSheet: StoryObj<ButtonProps> = {
  args: {
    label: 'Open',
    variant: Variant.Primary,
    size: Size.Medium,
    onClick: () => NiceModal.show(BottomSheet),
  },
  parameters: { controls: { disable: true } },
  render: (args) => <Button {...args} />,
  decorators: [(Story) => <div className="padding"><Story /></div>],
}

export const PreventClose: StoryObj<ButtonProps> = {
  args: {
    label: 'Open',
    variant: Variant.Primary,
    size: Size.Medium,
    onClick: () => NiceModal.show(PreventCloseModal),
  },
  parameters: { controls: { disable: true } },
  render: (args) => <Button {...args} />,
  decorators: [(Story) => <div className="padding"><Story /></div>],
}

// ---------- Content Story ----------

const ModalContent: React.FC = () => {
  const modal = useModal(TemporaryModal)
  return (
    <Content {...args} modal={modal}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula tempor gravida. Integer ac ligula luctus, consectetur nunc non, sagittis ipsum. Suspendisse vitae mattis leo. Maecenas a felis nec tortor molestie semper. Donec fermentum diam sollicitudin, ornare neque a, egestas quam. Pellentesque et nisl vitae enim scelerisque eleifend eu quis ipsum. Suspendisse potenti. Nulla in augue at odio imperdiet dapibus et nec risus. Nam elementum mi ut tellus bibendum, nec scelerisque urna blandit. Duis egestas risus neque, rutrum ultrices dui vehicula vitae.</p>
    </Content>
  )
}

export const ModalOpen: StoryObj = {
  render: () => <ModalContent />,
}

