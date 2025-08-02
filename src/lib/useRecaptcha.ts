import { useEffect } from 'react'

export const useRecaptcha = (siteKey: string) => {
  useEffect(() => {
    if (!siteKey) return

    const scriptSrc = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    const alreadyLoaded = document.querySelector(`script[src="${scriptSrc}"]`)

    if (alreadyLoaded) return

    const script = document.createElement('script')
    script.src = scriptSrc
    script.async = true
    script.defer = true
    document.head.appendChild(script)
  }, [siteKey])
}
