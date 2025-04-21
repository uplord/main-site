import styles from './style.module.scss'
import clsx from 'clsx'

import { Button, ButtonGroup } from '@/components/ui/Button'
import { Size, Variant } from '@/types/system'

import { UtilImage as Image } from '@/components/utils/Image'

export type BannerProps = {
}

export const Banner = ({
}: BannerProps) => {
  return (
    <div className={clsx(styles.banner)}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.image}>
            <div className={styles['image-wrap']}>
              <Image
                src="https://placehold.co/640/EEE/EEE/png"
                alt="Michael Allen"
                sizes="(max-width: 1024px) 140px, 500px"
                width={640}
                height={640}
              />
            </div>
          </div>
          <div className={styles.text}>
            <h1><span>Hi, I'm Michael</span> A Front End Developer</h1>
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
                variant={Variant.Text}
                size={Size.Medium}
              />
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
