import styles from './style.module.scss'
import clsx from 'clsx'

export type TimelineProps = {
}

export const Timeline = ({
}: TimelineProps) => {
  return (
    <div className={styles.timeline}>
      <div className={styles.container}>
        Timeline
      </div>
    </div>
  )
}
