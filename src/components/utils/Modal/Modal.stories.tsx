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
    (Story) => {
      return (
        <NiceModal.Provider>
          <Story />
        </NiceModal.Provider>
      )
    },
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

const TemporaryModal = NiceModal.create((props: ModalProps) => {
  const modal = useModal()

  return (
    <Modal
      {...args}
      {...props}
      modal={modal}
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel augue commodo, scelerisque nibh a, viverra elit. Aenean id nisl ut leo sagittis cursus id non quam. Nam commodo nibh quis dapibus blandit. Pellentesque in ultricies enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan vestibulum vestibulum. Sed ultrices ex ac fringilla imperdiet. Fusce quis lectus egestas, blandit lectus ac, suscipit libero. Integer viverra placerat dui, eu luctus elit egestas at. Curabitur laoreet vestibulum maximus. In euismod lobortis tortor a sodales. Maecenas eleifend justo id dolor ultricies consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed finibus ipsum nulla, nec placerat dui pulvinar vel. In suscipit, nulla ut bibendum pellentesque, nunc risus dictum lectus, non blandit mi ipsum at ante.</p>
    </Modal>
  )
})

const BottomSheet = NiceModal.create((props: ModalProps) => {
  const modal = useModal()

  return (
    <Modal
      {...args}
      {...props}
      modal={modal}
      mobileDraggable={true}
      bottomSheet={true}
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel augue commodo, scelerisque nibh a, viverra elit. Aenean id nisl ut leo sagittis cursus id non quam. Nam commodo nibh quis dapibus blandit. Pellentesque in ultricies enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan vestibulum vestibulum. Sed ultrices ex ac fringilla imperdiet. Fusce quis lectus egestas, blandit lectus ac, suscipit libero. Integer viverra placerat dui, eu luctus elit egestas at. Curabitur laoreet vestibulum maximus. In euismod lobortis tortor a sodales. Maecenas eleifend justo id dolor ultricies consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed finibus ipsum nulla, nec placerat dui pulvinar vel. In suscipit, nulla ut bibendum pellentesque, nunc risus dictum lectus, non blandit mi ipsum at ante.</p>
    </Modal>
  )
})

const PreventCloseModal = NiceModal.create((props: ModalProps) => {
  const modal = useModal()

  return (
    <Modal
      modal={modal}
      backdropClose={false}
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel augue commodo, scelerisque nibh a, viverra elit. Aenean id nisl ut leo sagittis cursus id non quam. Nam commodo nibh quis dapibus blandit. Pellentesque in ultricies enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan vestibulum vestibulum. Sed ultrices ex ac fringilla imperdiet. Fusce quis lectus egestas, blandit lectus ac, suscipit libero. Integer viverra placerat dui, eu luctus elit egestas at. Curabitur laoreet vestibulum maximus. In euismod lobortis tortor a sodales. Maecenas eleifend justo id dolor ultricies consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed finibus ipsum nulla, nec placerat dui pulvinar vel. In suscipit, nulla ut bibendum pellentesque, nunc risus dictum lectus, non blandit mi ipsum at ante.</p>
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

type HeaderStory = StoryObj<HeaderProps>
type FooterStory = StoryObj<FooterProps>

const HeaderTemplate: React.FC<HeaderProps> = (args) => {
  const modal = useModal(TemporaryModal);
  return <HeaderComponent {...args} modal={modal} />;
};

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
    leadingIcon: {
      control: { type: 'select' },
      options: IconOptions,
    },
    leadingButton: {
      control: { type: 'select' },
      options: Object.values(Variant),
    },
    trailingIcon: {
      control: { type: 'select' },
      options: IconOptions,
    },
    trailingButton: {
      control: { type: 'select' },
      options: Object.values(Variant),
    },
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
    leadingIcon: {
      control: {
        type: 'select',
      },
      options: IconOptions,
      if: { arg: 'title', truthy: false },
      and: { arg: 'subtitle', truthy: false },
    },
    leadingText: {
      if: { arg: 'title', truthy: false },
      and: { arg: 'subtitle', truthy: false },
    },
    leadingButton: {
      control: {
        type: 'select',
      },
      options: Object.values(Variant),
      if: { arg: 'title', truthy: false },
      and: { arg: 'subtitle', truthy: false },
    },
    leadingFunction: {
      table: {
        disable: true,
      },
    },
    trailingIcon: {
      control: {
        type: 'select',
      },
      options: IconOptions,
    },
    trailingButton: {
      control: {
        type: 'select',
      },
      options: Object.values(Variant),
    },
    trailingFunction: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => {
    return <FooterComponent {...args} />
  },
}

export const ButtonOpen: StoryObj<ButtonProps> = {
  args: {
    label: 'Open',
    variant: Variant.Primary,
    size: Size.Medium,
    onClick: () => NiceModal.show(TemporaryModal),
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args) => <Button {...args} />,
  decorators: [
    (Story) => {
      return (
        <div className="padding">
          <Story />
        </div>
      )
    },
  ],
}

export const MobileBottomSheet: StoryObj<ButtonProps> = {
  args: {
    label: 'Open',
    variant: Variant.Primary,
    size: Size.Medium,
    onClick: () => NiceModal.show(BottomSheet),
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args) => <Button {...args} />,
  decorators: [
    (Story) => {
      return (
        <div className="padding">
          <Story />
        </div>
      )
    },
  ],
}

export const PreventClose: StoryObj<ButtonProps> = {
  args: {
    label: 'Open',
    variant: Variant.Primary,
    size: Size.Medium,
    onClick: () => NiceModal.show(PreventCloseModal),
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args) => <Button {...args} />,
  decorators: [
    (Story) => {
      return (
        <div className="padding">
          <Story />
        </div>
      )
    },
  ],
}

export const ModalOpen: StoryObj = {
  render: () => {
    const modal = useModal(TemporaryModal);

    return <Content {...args} modal={modal}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel augue commodo, scelerisque nibh a, viverra elit. Aenean id nisl ut leo sagittis cursus id non quam. Nam commodo nibh quis dapibus blandit. Pellentesque in ultricies enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan vestibulum vestibulum. Sed ultrices ex ac fringilla imperdiet. Fusce quis lectus egestas, blandit lectus ac, suscipit libero. Integer viverra placerat dui, eu luctus elit egestas at. Curabitur laoreet vestibulum maximus. In euismod lobortis tortor a sodales. Maecenas eleifend justo id dolor ultricies consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed finibus ipsum nulla, nec placerat dui pulvinar vel. In suscipit, nulla ut bibendum pellentesque, nunc risus dictum lectus, non blandit mi ipsum at ante.</p>
    </Content>
  },
};

