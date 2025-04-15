import type { Meta, StoryObj } from '@storybook/react'
import styles from './colors.module.scss'
import { Colors, ColorsProps } from './Colors'

const colors = {
  Background: [
    { name: 'Background', className: 'border', hexCode: ['#FFFFFF', '#0D0D0D'] },
  ],
  Text: [
    { name: 'Heading', hexCode: ['#222222', '#ffffff'] },
    { name: 'Text', hexCode: ['#5D5D5D', '#bdc1c6'] },
  ],
  Test: [
    { name: 'Border', hexCode: ['#c3c3c3', '#565656'] },
    { name: 'Hover', hexCode: ['#f3f3f3', '#252525'] },
    { name: 'Focus', hexCode: ['#0d0d0d', '#ffffff'] },
    { name: 'Disabled', hexCode: ['#0d0d0d26', '#ffffff26'] },
    { name: 'Skeleton', className: 'skeleton', hexCode: ['#e7e7e7', '#252525'] },
    { name: 'Placeholder', hexCode: ['#868686', '#868686'] },
    { name: 'Icon', hexCode: ['#3d3d3d', '#cfcfcf'] },
  ],
  Colours: [
    { name: 'Primary', hexCode: '#dd2121' },
    { name: 'Success', hexCode: '#29a027' },
    { name: 'Error', hexCode: '#dd2121' },
    { name: 'Warning', hexCode: '#ffcc00' },
    { name: 'Info', hexCode: '#1164cc' },
    { name: 'Rebecca', hexCode: '#663399' },
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
    variable: {
      control: { type: 'text' },
      table: { disable: true },
    },
    hexCode: {
      control: { type: 'text' },
      table: { disable: true },
    },
  },
}

export default meta

type Story = StoryObj<ColorsProps>

export const Default: Story = {
  args: colorOptions[0],
  render: ({ name }, { globals }) => {
    const background = globals.backgrounds?.value === '#0d0d0d' ? 'dark' : 'light'
    const selectedColor = colorOptions.find((color) => color.name === name) || colorOptions[0]
    const className = selectedColor.className
    const hexCode = selectedColor.hexCode

    return (
      <div className={styles.colors}>
        <Colors name={name} className={className ? className : ''} hexCode={hexCode.length === 2 ? (background === 'light' ? hexCode[0] : hexCode[1]) : hexCode} />
      </div>
    )
  }
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
        <div key={category} className={styles.block}>
          <div className={styles.title}>{category}</div>
          <div className={styles.colors}>
            {shades.map(({ name, className, hexCode } : ColorsProps) => (
              <Colors key={name} name={name} className={className ? className : ''} hexCode={hexCode.length === 2 ? (background === 'light' ? hexCode[0] : hexCode[1]) : hexCode} />
            ))}
          </div>
        </div>
      ))}
    </div>
    )
  },
}