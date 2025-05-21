import Image from 'next/image'
import styles from './style.module.scss'

import { Button, ButtonGroup } from '@/components/ui/Button'
import { Size, Variant } from '@/types/system'

export type SectionProps = {
  id?: string
}

export const Section = ({ id }: SectionProps) => {
  return (
    <div id={id} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.image}>
            <div className={styles['image-wrap']}>
              <Image
                src="https://placehold.co/32/eee/eee/png"
                alt="Michael Allen"
                width={522}
                height={522}
              />
            </div>
          </div>
          <div className={styles.text}>
            <h3>About Michael Allen</h3>
            <h2>Front End Development</h2>
            <p>I&lsquo;m an experienced Front End Developer with excellent collaboration, organization, and teamwork skills. Passionate about developing in HTML, CSS, and JavaScript and always open to exploring new technologies. Over the last decade, I&lsquo;ve worked with various clients, helping me hone my analytical, debugging, and problem-solving skills to create exceptional websites.</p>
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
