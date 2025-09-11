'use client'

import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const isMobile = useMediaQuery({ maxWidth: 743 })
  const isMedium = useMediaQuery({ maxWidth: 1024 })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const offset = 80 + (isMobile ? 22 : isMedium ? 30 : 64)
    const viewportHeight = window.innerHeight
    const bottomMargin = -(viewportHeight - offset) + 'px'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: `0px 0px ${bottomMargin} 0px`,
      },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [sectionIds, isMobile, isMedium])

  return activeId
}
