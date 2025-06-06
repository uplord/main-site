import * as icons from 'lucide-react'

import { IconProps } from '@/components/utils/Icon'

export const IconOptions = [
  null,
  ...Object.keys(icons).filter((name) => !name.startsWith('Lucide') && !name.endsWith('Icon')),
] as (IconProps['name'] | null)[]

export type AvailableIcons = keyof typeof icons
