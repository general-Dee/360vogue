'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

declare global { interface Window { fbq: any; } }

export default function MetaPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
    if (!pixelId || pixelId === 'YOUR_PIXEL_ID_HERE') return;
    if (typeof window !== 'undefined' && !window.fbq) {
      (function(f,b,e,v,n,t,s){
        if(f.fbq)return; n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0';
        t=b.createElement(e); t.async=!0; t.src=v; s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
    }
  }, []);
  useEffect(() => { if (window.fbq) window.fbq('track', 'PageView'); }, [pathname, searchParams]);
  return null;
}