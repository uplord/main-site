import Image from 'next/image'
import React from 'react'

import styles from './style.module.scss'
import { Button, ButtonGroup } from '@/components/ui/Button'
import { useMounted } from '@/lib/useMounted'

export type SectionProps = {
  id?: string
}

export const Section = ({ id }: SectionProps) => {
  const mounted = useMounted()
  const skeletonClass = !mounted ? styles.skeleton : ''

  return (
    <div
      id={id}
      className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.image}>
            <div className={styles['image-wrap']}>
              {mounted ? (
                <Image
                  src="/ellie.png"
                  alt="Michael Allen"
                  sizes="(max-width: 743px) 250px, 500px"
                  width={520}
                  height={520}
                />
              ) : (
                <div className={styles.skeleton}></div>
              )}
            </div>
          </div>
          <div className={styles.text}>
            <h3 className={skeletonClass}>About Michael Allen</h3>
            <h2 className={skeletonClass}>Front End Development</h2>
            <p className={skeletonClass}>
              I&lsquo;m an experienced Front End Developer with excellent collaboration,
              organization, and teamwork skills. Passionate about developing in HTML, CSS, and
              JavaScript and always open to exploring new technologies. Over the last decade,
              I&lsquo;ve worked with various clients, helping me hone my analytical, debugging, and
              problem-solving skills to create exceptional websites.
            </p>
            <ButtonGroup className={styles['button-group']}>
              <Button
                href="mailto:michael@uplord.co.uk"
                label="Get in touch"
                variant="primary"
                size="md"
                isSkeleton={!mounted}
              />
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
