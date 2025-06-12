'use client'

import NiceModal from '@ebay/nice-modal-react'
import { useContext, useEffect } from 'react'

export const useModalData = () => {
  const activeModals = useContext(NiceModal.NiceModalContext)
  const areThereActiveModals = Object.keys(activeModals).length > 0

  // Listen to browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      Object.values(activeModals).forEach((i) => NiceModal.remove(i.id))
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [activeModals])

  // Scroll lock on modal open
  useEffect(() => {
    if (areThereActiveModals) {
      document.body.classList.add('stop-scroll')
    } else {
      document.body.classList.remove('stop-scroll')
    }

    return () => {
      document.body.classList.remove('stop-scroll')
    }
  }, [areThereActiveModals])

  return areThereActiveModals
}
