import styles from './style.module.scss'
import clsx from 'clsx'

import { Button, ButtonGroup } from '@/components/ui/Button'
import { Size, Variant } from '@/types/system'

import { UtilImage as Image } from '@/components/utils/Image'

export type SectionProps = {
}

export const Section = ({
}: SectionProps) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.image}>
            <div className={styles['image-wrap']}>
              <Image
                src="/images/me.png"
                alt="Michael Allen"
                sizes="(max-width: 1024px) 140px, 500px"
                width={500}
                height={617}
              />
            </div>
          </div>
          <div className={styles.text}>
            <h3>About Michael Allen</h3>
            <h2>Front End Development</h2>
            <p>I'm an experienced Front End Developer with excellent collaboration, organization, and teamwork skills. Passionate about developing in HTML, CSS, and JavaScript and always open to exploring new technologies. Over the last decade, I've worked with various clients, helping me hone my analytical, debugging, and problem-solving skills to create exceptional websites.</p>
            <ButtonGroup className={styles['button-group']}>
              <Button
                href="mailto:michael@uplord.co.uk"
                label="Get in touch"
                variant={Variant.Primary}
                size={Size.Medium}
              />
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
