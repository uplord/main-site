'use client'

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes'
import React, { ReactNode } from 'react'

interface ThemeProviderPropsExtended extends ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children, ...props }: ThemeProviderPropsExtended) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
