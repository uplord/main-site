'use client'

import styles from './footer.module.scss'
import { Social } from '../Social'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <Social className={styles.social} />
        <p>&copy; {currentYear} Michael Allen</p>
      </div>
    </div>
  )
}
