import React from 'react'
import styles from './colors.module.scss'

export type ColorsProps = {
  name: string
  className?: string
  hexCode?: string
}

export const Colors = ({
  name = '',
  className = '',
  hexCode = '',
}: ColorsProps) => {
  return (
    <div className={styles.color}>
      <div className={`${styles.background} ${className ? styles[className] : ''}`} style={{background: hexCode}}></div>
      <div className={styles.text}>
        <div className={styles.name}>{name}</div>
        {hexCode && (
          <div className={styles.hex}>{hexCode}</div>
        )}
      </div>
    </div>
  )
}
