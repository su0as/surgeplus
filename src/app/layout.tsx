import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SURGE+ - AI Sports Performance Analysis | Train Smarter",
  description: "Upload your sports videos and get instant AI-powered technique analysis. Track your progress and improve your game with SURGE+.",
  keywords: ["AI sports analysis", "video analysis app", "golf swing analysis", "tennis serve analysis", "sports performance tracking", "SURGE", "SURGE+"],
  authors: [{ name: "SURGE+" }],
  metadataBase: new URL('https://surge.app'),
  openGraph: {
    title: "SURGE+ - AI Sports Performance Analysis",
    description: "AI-powered video analysis for athletes. Upload your form, get instant feedback, and track your progress.",
    images: ["/images/surge-og-image.png"],
    type: "website",
    siteName: "SURGE+",
  },
  twitter: {
    card: "summary_large_image",
    title: "SURGE+ - AI Sports Performance Analysis",
    description: "AI-powered video analysis for athletes",
    images: ["/images/surge-og-image.png"],
  },
  icons: {
    icon: "/images/surge-icon.png",
    apple: "/images/surge-icon.png",
  },
};

export const viewport = {
  themeColor: "#ADFF2F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
