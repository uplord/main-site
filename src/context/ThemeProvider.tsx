'use client'

import React, { ReactNode } from 'react'
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from 'next-themes'

interface ThemeProviderPropsExtended extends ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderPropsExtended) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
