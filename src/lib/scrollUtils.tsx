import { useState, useEffect } from 'react'

export function useScroll() {
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 0 ? true : false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isScrolled
}
