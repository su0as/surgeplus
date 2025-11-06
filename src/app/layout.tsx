import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const poppins = Poppins({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "SURGE+ - AI Sports Performance Analysis | Train Smarter",
  description: "Upload your sports videos and get instant AI-powered technique analysis for Golf, Tennis, Basketball, Pickleball, and Baseball. Track your progress and improve your game with SURGE+.",
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
    title: "SURGE+ - AI Sports Performance Analysis",
    description: "AI-powered video analysis for athletes. Upload your form, get instant biomechanical feedback, and track your progress across multiple sports.",
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
    title: "SURGE+ - AI Sports Performance Analysis",
    description: "AI-powered video analysis for athletes. Improve your technique with instant feedback.",
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
    icon: "/images/surge-icon.png",
    shortcut: "/images/surge-icon.png",
    apple: "/images/surge-icon.png",
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
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
