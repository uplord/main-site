import { clsx } from 'clsx'
import styles from './social.module.scss'
import LinkedinIcon from '@/../public/icons/linkedin-in-brands-solid.svg';
import InstagramIcon from '@/../public/icons/instagram-brands-solid.svg';
import GithubIcon from '@/../public/icons/github-brands-solid.svg';
import EmailIcon from '@/../public/icons/envelope-solid.svg';
import { useMounted } from '@/lib/useMounted'

export type SocialProps = {
  className?: string
  isMounted?: boolean
}

export const Social = ({ className, isMounted = false }: SocialProps) => {
  let mounted = isMounted
  if (!mounted) {
    mounted = useMounted()
  }

  return (
    <div className={clsx(styles.social, className)}>
      <a href="https://www.linkedin.com/in/themichael/" target="_blank" className={clsx(styles.icon, styles.linkedin, !mounted && styles.skeleton)}>
        <LinkedinIcon width="20" height="20" />
      </a>
      <a href="https://www.instagram.com/michael.adam.allen/" target="_blank" className={clsx(styles.icon, styles.instagram, !mounted && styles.skeleton)}>
        <InstagramIcon width="20" height="20" />
      </a>
      <a href="https://github.com/uplord/" target="_blank" className={clsx(styles.icon, styles.github, !mounted && styles.skeleton)}>
        <GithubIcon width="20" height="20" />
      </a>
      <a href="mailto:michael@uplord.co.uk" className={clsx(styles.icon, styles.default, !mounted && styles.skeleton)}>
        <EmailIcon width="20" height="20" />
      </a>
    </div>
  )
}
