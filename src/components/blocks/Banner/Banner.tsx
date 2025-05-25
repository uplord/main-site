'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './style.module.scss'
import clsx from 'clsx'
import { useTheme } from 'next-themes'

import { Button, ButtonGroup } from '@/components/ui/Button'
import { Size, Variant } from '@/types/system'
import { useMounted } from '@/lib/useMounted'

export type BannerProps = {
  id?: string
  hasHeader?: boolean
}

export const Banner = ({
  id,
  hasHeader = false
}: BannerProps) => {
  const { resolvedTheme } = useTheme()
  const [darkMode, setDarkMode] = useState(false)
  const mounted = useMounted()

  useEffect(() => {
    if (resolvedTheme) {
      setDarkMode(resolvedTheme === 'dark')
    }
  }, [resolvedTheme])

  const skeletonClass = !mounted ? styles.skeleton : ''

  return (
    <div id={id} className={clsx(styles.banner, hasHeader && styles.header)}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.image}>
            <div className={styles['image-wrap']}>
              {mounted ? (
                <Image
                  src={darkMode ? `https://placehold.co/32/252525/252525/png` : `https://placehold.co/32/562C80/562C80/png`}
                  alt="Michael Allen"
                  sizes="(max-width: 1024px) 140px, 500px"
                  width={640}
                  height={640}
                  priority
                />
              ) : (
                <div className={styles.skeleton}></div>
              )}
            </div>
          </div>
          <div className={styles.text}>
            <h1>
              <span className={clsx(styles.primary, skeletonClass)}>Hi, I&apos;m Michael</span>
              <span className={skeletonClass}>A Front End Developer</span>
            </h1>
            <h2 className={skeletonClass}>With over a decade in the industry creating websites</h2>
            <ButtonGroup className={styles['button-group']}>
              <Button
                href="mailto:michael@uplord.co.uk"
                label="Get in touch"
                variant={Variant.Primary}
                size={Size.Medium}
                isSkeleton={!mounted}
                className={!mounted ? clsx(styles.skeleton, styles.button) : ''}
              />
              <Button
                label="Download CV"
                href="/michael-allen-cv.pdf"
                target="_blank"
                variant={Variant.Default}
                size={Size.Medium}
                isSkeleton={!mounted}
                className={!mounted ? clsx(styles.skeleton, styles.button) : ''}
              />
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
