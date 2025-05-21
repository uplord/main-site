'use client'

import { clsx } from 'clsx'
import styles from './social.module.scss'
import LinkedinIcon from '@/../public/icons/linkedin-in-brands-solid.svg';
import InstagramIcon from '@/../public/icons/instagram-brands-solid.svg';
import GithubIcon from '@/../public/icons/github-brands-solid.svg';
import EmailIcon from '@/../public/icons/envelope-solid.svg';

export type SocialProps = {
  className?: string
}

export const Social = ({ className }: SocialProps) => {
  return (
    <div className={clsx(styles.social, className)}>
      <a href="https://www.linkedin.com/in/themichael/" target="_blank" className={styles.linkedin}>
        <LinkedinIcon width="20" height="20" />
      </a>
      <a href="https://www.instagram.com/michael.adam.allen/" target="_blank" className={styles.instagram}>
        <InstagramIcon width="20" height="20" />
      </a>
      <a href="https://github.com/uplord/" target="_blank" className={styles.github}>
        <GithubIcon width="20" height="20" />
      </a>
      <a href="mailto:michael@uplord.co.uk" className={styles.default}>
        <EmailIcon width="20" height="20" />
      </a>
    </div>
  )
}
