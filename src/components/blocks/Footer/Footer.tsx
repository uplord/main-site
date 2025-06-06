import { clsx } from 'clsx'

import { Social } from '../Social'
import styles from './footer.module.scss'
import { useMounted } from '@/lib/useMounted'

export const Footer = () => {
  const mounted = useMounted()
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <Social
          className={styles.social}
          isMounted={mounted}
        />
        <p className={clsx(!mounted && styles.skeleton)}>&copy; {currentYear} Michael Allen</p>
      </div>
    </div>
  )
}
