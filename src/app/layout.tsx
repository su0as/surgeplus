import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import LoadingScreen from "@/components/LoadingScreen";

const poppins = Poppins({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Surge+ | AI Sports Analysis & Swing Tracker",
  description: "Join the top 1%. AI-powered video analysis for Tennis, Golf, and Basketball. Improve your form instantly. Download on iOS.",
  keywords: [
    "AI sports analysis",
    "video analysis app",
    "golf swing analysis",
    "tennis serve analysis",
    "basketball shot analysis",
    "pickleball technique",
    "baseball swing analysis",
    "sports performance tracking",
    "biomechanics analysis",
    "SURGE",
    "SURGE+"
  ],
  authors: [{ name: "SURGE+" }],
  creator: "SURGE+",
  publisher: "SURGE+",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://surge.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Surge+ | AI Sports Analysis & Swing Tracker",
    description: "Join the top 1%. AI-powered video analysis for Tennis, Golf, and Basketball. Improve your form instantly. Download on iOS.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://surge.app',
    siteName: "SURGE+",
    images: [
      {
        url: "/images/surge-og-image.png",
        width: 1200,
        height: 630,
        alt: "SURGE+ - AI Sports Performance Analysis",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surge+ | AI Sports Analysis & Swing Tracker",
    description: "Join the top 1%. AI-powered video analysis for Tennis, Golf, and Basketball. Improve your form instantly. Download on iOS.",
    images: ["/images/surge-og-image.png"],
    creator: "@surgeplus",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#ADFF2F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <style dangerouslySetInnerHTML={{
          __html: `
            body {
              background: #FFFFFF;
              margin: 0;
              padding: 0;
            }
          `
        }} />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <LoadingScreen />
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
