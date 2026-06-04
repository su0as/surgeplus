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
  title: "Shot AI | AI Sports Coach & Swing Analysis for Golf, Tennis & Pickleball",
  description: "Shot AI turns every swing video into a coaching session — AI swing analysis, 17-point body tracking, live cues, and frame-by-frame feedback for golf, tennis, and pickleball, right from your iPhone.",
  keywords: [
    "AI swing analysis",
    "golf swing analyzer",
    "tennis swing analysis",
    "pickleball coaching",
    "AI sports coach",
    "swing analysis app",
    "skeleton tracking",
    "sports performance tracking",
    "Shot AI",
    "AI coaching",
  ],
  authors: [{ name: "Shot AI" }],
  creator: "Shot AI",
  publisher: "Shot AI",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://surgeplus.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Shot AI | AI Sports Coach & Swing Analysis",
    description: "Turn every swing into a coaching session. AI swing analysis, 17-point body tracking, and live cues for golf, tennis, and pickleball.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://surgeplus.app',
    siteName: "Shot AI",
    images: [
      {
        url: "/app-icon.png",
        width: 1024,
        height: 1024,
        alt: "Shot AI - AI Sports Coach",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shot AI | AI Sports Coach & Swing Analysis",
    description: "Turn every swing into a coaching session. AI swing analysis, 17-point body tracking, and live cues for golf, tennis, and pickleball.",
    images: ["/app-icon.png"],
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
