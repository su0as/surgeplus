'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { initGA, GA_TRACKING_ID } from '@/lib/analytics';

export default function GoogleAnalytics() {
  useEffect(() => {
    if (GA_TRACKING_ID) {
      initGA();
    }
  }, []);

  if (!GA_TRACKING_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            anonymize_ip: true,
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
