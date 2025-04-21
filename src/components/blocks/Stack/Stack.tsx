import styles from './style.module.scss'
import clsx from 'clsx'

export type StackProps = {
}

export const Stack = ({
}: StackProps) => {
  return (
    <div className={styles.stack}>
      <div className={styles.container}>
        Stack
      </div>
    </div>
  )
}
