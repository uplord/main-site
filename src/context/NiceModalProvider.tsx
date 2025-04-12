'use client'

import { ReactNode } from 'react'
import NiceModal from '@ebay/nice-modal-react'

export default function NiceModalProvider({
  children,
}: {
  children: ReactNode
}) {
  return <NiceModal.Provider>{children}</NiceModal.Provider>
}
