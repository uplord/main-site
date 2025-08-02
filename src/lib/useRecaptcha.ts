import { useEffect } from 'react'

export const useRecaptcha = (siteKey: string) => {
  useEffect(() => {
    if (!siteKey) return

    const loadScript = () => {
      if (window.grecaptcha) return

      const script = document.createElement('script')
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }

    loadScript()
  }, [siteKey])
}
