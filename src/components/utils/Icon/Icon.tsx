import * as icons from 'lucide-react'
import { LucideIcon } from 'lucide-react'
import React from 'react'

import { SizeType } from '@/types/system'

type AvailableIcons = keyof typeof icons

export interface IconProps {
  name: AvailableIcons | null
  size: SizeType
  strokeWidth?: number
  className?: string
}

export function Icon({ name, size, strokeWidth = 2, className = '' }: IconProps) {
  if (!name) {
    return false
  }

  const LucideIcon = icons[name] as LucideIcon

  let iconSize = 20

  if (size === 'sm') {
    iconSize = 16
  }

  if (size === 'lg') {
    iconSize = 24
  }

  if (size === 'xl') {
    iconSize = 28
  }

  return (
    <LucideIcon
      size={iconSize}
      className={className}
      strokeWidth={strokeWidth}
    />
  )
}
