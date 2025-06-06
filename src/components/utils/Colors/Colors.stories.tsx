import type { Meta, StoryObj } from '@storybook/nextjs'

import { Colors, ColorsProps } from './Colors'
import styles from './colors.module.scss'

const colors = {
  Background: [{ name: 'Background', className: 'border', hexCode: ['#FFFFFF', '#0D0D0D'] }],
  Text: [
    { name: 'Heading', className: '', hexCode: ['#222222', '#ffffff'] },
    { name: 'Text', className: '', hexCode: ['#5D5D5D', '#bdc1c6'] },
  ],
  Test: [
    { name: 'Border', className: '', hexCode: ['#c3c3c3', '#565656'] },
    { name: 'Hover', className: '', hexCode: ['#f3f3f3', '#252525'] },
    { name: 'Focus', className: '', hexCode: ['#0d0d0d', '#ffffff'] },
    { name: 'Disabled', className: '', hexCode: ['#0d0d0d26', '#ffffff26'] },
    { name: 'Skeleton', className: 'skeleton', hexCode: ['#e7e7e7', '#252525'] },
    { name: 'Placeholder', className: '', hexCode: ['#868686', '#868686'] },
    { name: 'Icon', className: '', hexCode: ['#3d3d3d', '#cfcfcf'] },
  ],
  Colours: [
    { name: 'Primary', className: '', hexCode: '#dd2121' },
    { name: 'Success', className: '', hexCode: '#29a027' },
    { name: 'Error', className: '', hexCode: '#dd2121' },
    { name: 'Warning', className: '', hexCode: '#ffcc00' },
    { name: 'Info', className: '', hexCode: '#1164cc' },
    { name: 'Rebecca', className: '', hexCode: '#663399' },
  ],
}

const colorOptions = Object.values(colors).flat()

const meta: Meta<ColorsProps> = {
  title: 'Components/Colors',
  component: Colors,
  decorators: [
    (Story) => (
      <div className="padding">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: colorOptions.map((color) => color.name),
    },
    hexCode: {
      control: { type: 'text' },
      table: { disable: true },
    },
    className: {
      control: { type: 'text' },
      table: { disable: true },
    },
  },
}

export default meta

type Story = StoryObj<ColorsProps>

export const Default: Story = {
  args: colorOptions[0],
  render: ({ name }) => {
    const selectedColor = colorOptions.find((color) => color.name === name) || colorOptions[0]
    const { className, hexCode } = selectedColor

    return (
      <div className={styles.colors}>
        <Colors
          name={name}
          className={className || ''}
          hexCode={Array.isArray(hexCode) ? hexCode[0] : hexCode}
        />
      </div>
    )
  },
}

export const AllColors: Story = {
  argTypes: {
    name: {
      table: { disable: true },
    },
  },
  render: (_, { globals }) => {
    const background = globals.backgrounds?.value === '#0d0d0d' ? 'dark' : 'light'

    return (
      <div className={styles.blocks}>
        {Object.entries(colors).map(([category, shades]) => (
          <div
            key={category}
            className={styles.block}>
            <div className={styles.title}>{category}</div>
            <div className={styles.colors}>
              {shades.map(({ name, className, hexCode }: ColorsProps) => (
                <Colors
                  key={name}
                  name={name}
                  className={className || ''}
                  hexCode={
                    Array.isArray(hexCode)
                      ? background === 'light'
                        ? hexCode[0]
                        : hexCode[1]
                      : hexCode
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  },
}
