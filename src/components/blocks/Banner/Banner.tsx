import React from 'react'
import Image from 'next/image'
import styles from './style.module.scss'
import clsx from 'clsx'

import { Button, ButtonGroup } from '@/components/ui/Button'
import { Size, Variant } from '@/types/system'

export type BannerProps = {
  id?: string
  hasHeader?: boolean
}

export const Banner = ({
  id,
  hasHeader = false
}: BannerProps) => {

  return (
    <div id={id} className={clsx(styles.banner, hasHeader && styles.header)}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.image}>
            <div className={styles['image-wrap']}>
              <Image
                src="https://placehold.co/32/0d4d9d/0d4d9d/png"
                alt="Michael Allen"
                sizes="(max-width: 1024px) 140px, 500px"
                width={640}
                height={640}
                priority
              />
            </div>
          </div>
          <div className={styles.text}>
            <h1><span>Hi, I&apos;m Michael</span> A Front End Developer</h1>
            <h2>With over a decade in the industry creating websites</h2>
            <ButtonGroup className={styles['button-group']}>
              <Button
                href="mailto:michael@uplord.co.uk"
                label="Get in touch"
                variant={Variant.Primary}
                size={Size.Medium}
              />
              <Button
                label="Download CV"
                href="/michael-allen-cv.pdf"
                target="_blank"
                variant={Variant.Default}
                size={Size.Medium}
              />
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
