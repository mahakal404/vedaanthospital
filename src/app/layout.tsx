import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vedaanthospital.netlify.app'),
  title: 'Vedaant Hospital | 24/7 Comprehensive Healthcare',
  description: 'Vedaant Hospital in Killa-Pardi offers 24/7 comprehensive and compassionate healthcare with modern technology and expert doctors.',
  icons: {
    icon: '/ved.jpg',
    apple: '/ved.jpg',
  },
  openGraph: {
    title: 'Vedaant Hospital | Killa-Pardi',
    description: 'Trusted 24/7 healthcare, expert specialists, and advanced medical facilities in Killa-Pardi.',
    url: 'https://vedaanthospital.netlify.app',
    siteName: 'Vedaant Hospital',
    images: [
      {
        url: '/ved.jpg',
        width: 800,
        height: 800,
        alt: 'Vedaant Hospital Official Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vedaant Hospital | Comprehensive Healthcare',
    description: 'Trusted 24/7 healthcare in Killa-Pardi.',
    images: ['/ved.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
