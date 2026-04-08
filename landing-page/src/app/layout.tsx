import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Landing Pages - Earn 10K-50K BDT Online",
  description:
    "A step-by-step digital product for university students who want to learn a practical, high-income skill - building landing pages with AI - and start earning online without coding.",
  keywords: [
    "AI landing pages",
    "earn online Bangladesh",
    "digital product",
    "freelancing for students",
    "make money online BDT",
  ],
  openGraph: {
    title: "AI Landing Pages - Earn 10K-50K BDT Online",
    description:
      "Learn to build landing pages with AI and start earning your first 10K-50K BDT online. No coding needed.",
    type: "website",
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
