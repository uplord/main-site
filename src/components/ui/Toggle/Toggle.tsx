'use client'

import React, { use, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import clsx from 'clsx'
import styles from './toggle.module.scss'

import { Checkbox, CheckboxProps } from '@/components/ui/Checkbox'

export type ToggleProps = {

} & CheckboxProps

export const Toggle = ({
  ...props
}: ToggleProps) => {
  const [isSkeleton, setIsSkeleton] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSkeleton(false)
    }, 300)
  
    return () => clearTimeout(timeout)
  }, [props.isSkeleton])

  return (
    <div className={clsx(
      styles.toggle,
      isSkeleton && styles.skeleton,
      props.checked && styles.checked
    )}>
      <motion.span
        animate={{ x: props.checked ? 40 : 0 }}
        transition={isSkeleton ? { duration: 0 } : { duration: 0.2 }}
      ></motion.span>
      <Checkbox {...props} className={clsx(styles.checkbox, props.className)} />
    </div>
  )
}
