'use client'

import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

import styles from './style.module.scss'
import { Social } from '@/components/blocks/Social'
import { Button, ButtonGroup } from '@/components/ui/Button'
import { useMounted } from '@/lib/useMounted'

export type BannerProps = {
  id?: string
  hasHeader?: boolean
}

export const Banner = ({ id, hasHeader = false }: BannerProps) => {
  const mounted = useMounted()
  const skeletonClass = !mounted ? styles.skeleton : ''

  return (
    <div
      id={id}
      className={clsx(styles.banner, hasHeader && styles.header)}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.image}>
            <div className={clsx(styles['image-wrap'], mounted && styles.glass)}>
              {mounted ? (
                <>
                  <Image
                    src="/me.jpeg"
                    alt="Michael Allen"
                    sizes="(max-width: 743px) 140px, 500px"
                    width={500}
                    height={500}
                    priority
                  />
                  <Social
                    className={styles.social}
                    isMounted={mounted}
                  />
                </>
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
                variant="primary"
                size="md"
                isSkeleton={!mounted}
                className={!mounted ? clsx(styles.skeleton, styles.button) : ''}
              />
              <Button
                label="Download CV"
                href="/michael-allen-cv.pdf"
                target="_blank"
                variant="default"
                size="md"
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
