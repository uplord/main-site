import Image from 'next/image'

export type ImageProps = {
  src: string
  alt: string
  sizes?: string
  width: number
  height: number
}

export const UtilImage = ({ src, alt, sizes = '', width, height }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      quality={80}
      priority
      sizes={sizes}
      width={width}
      height={height}
    />
  )
}
