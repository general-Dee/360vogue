'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global { interface Window { fbq: any } }

export default function MetaPixel() {
  const pathname = usePathname()
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID
    if (!pixelId) return
    if (typeof window.fbq === 'undefined') {
      window.fbq = function() { window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments) }
      window.fbq.queue = []
      window.fbq.version = '2.0'
      const script = document.createElement('script')
      script.src = 'https://connect.facebook.net/en_US/fbevents.js'
      script.async = true
      document.head.appendChild(script)
      window.fbq('init', pixelId)
    }
    window.fbq('track', 'PageView')
  }, [pathname])
  return null
}