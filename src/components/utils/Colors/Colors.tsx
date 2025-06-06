import React from 'react'

import styles from './colors.module.scss'

export type ColorsProps = {
  name: string
  className?: string
  hexCode?: string | string[]
}

export const Colors = ({ name = '', className = '', hexCode = '' }: ColorsProps) => {
  const background = Array.isArray(hexCode) ? hexCode[0] : hexCode // Handle hexCode as array or string
  const classNames = `${styles.background} ${className ? styles[className] : ''}` // Handle optional className

  return (
    <div className={styles.color}>
      <div
        className={classNames}
        style={{ background: background }}></div>
      <div className={styles.text}>
        <div className={styles.name}>{name}</div>
        {hexCode && (
          <div className={styles.hex}>{Array.isArray(hexCode) ? hexCode.join(' / ') : hexCode}</div>
        )}
      </div>
    </div>
  )
}
