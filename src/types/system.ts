export type VariantType =
  | 'default'
  | 'text'
  | 'primary'
  | 'success'
  | 'outline'
  | 'white'
  | 'black'
  | 'anchor'

export enum Variant {
  Default = 'default',
  Text = 'text',
  Primary = 'primary',
  Success = 'success',
  Outline = 'outline',
  White = 'white',
  Black = 'black',
}

export type SizeType = 'sm' | 'md' | 'lg' | 'xl'

export enum Size {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  ExtraLarge = 'xl',
}

export type ImageProps = {
  src: string
  alt: string
  sizes: string
  width: number
  height: number
}
