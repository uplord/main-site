export enum Variant {
  Default = 'default',
  Text = 'text',
  Primary = 'primary',
  Success = 'success',
  Outline = 'outline',
}

export type ImageProps = {
  src: string
  alt: string
  sizes: string
  width: number
  height: number
}

export enum Size {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  ExtraLarge = 'xl',
}

export type SizeType = Size.Small | Size.Medium | Size.Large | Size.ExtraLarge

export const isProd = () => {
  process.env.ENVIRONMENT === 'production'
}

export const isDev = () => {
  process.env.ENVIRONMENT === 'development'
}
