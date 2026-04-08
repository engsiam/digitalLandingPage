import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://ailandingpages.com'),
  title: {
    default: "AI Landing Pages - Master a High-Demand Digital Skill",
    template: "%s | AI Landing Pages"
  },
  description:
    "A step-by-step roadmap for university students to build high-converting landing pages with AI. Start building your digital future with a practical skill.",
  keywords: [
    "AI landing pages",
    "digital skills for students",
    "digital product",
    "freelancing for students",
    "learn AI design",
    "student portfolio building",
    "AI design roadmap"
  ],
  authors: [{ name: "AI Landing Pages Team" }],
  creator: "AI Landing Pages",
  publisher: "AI Landing Pages",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "AI Landing Pages - Master High-Demand Digital Skills",
    description: "Build a professional portfolio by mastering AI landing pages. Practical, no-code, student-ready roadmap.",
    url: 'https://ailandingpages.com',
    siteName: 'AI Landing Pages',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Landing Pages - Digital Roadmap',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Landing Pages - Master Digital Skills",
    description: "The complete AI design roadmap for students.",
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
