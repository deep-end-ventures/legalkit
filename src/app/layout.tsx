import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WebsiteJsonLd } from "@/components/JsonLd";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://legalkit.deependventures.com"),
  title: "LegalKit — AI-Powered Legal Document Generator",
  description: "Generate professional privacy policies, terms of service, and cookie policies for your business in minutes. Free tier available. LegalKit is a template generator, not a law firm.",
  keywords: ["privacy policy generator", "terms of service generator", "cookie policy", "legal documents", "GDPR", "CCPA"],
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "LegalKit — Legal Document Generator",
    description: "Generate professional legal documents for your business in minutes.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LegalKit — AI-Powered Legal Document Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LegalKit — Legal Document Generator",
    description: "Generate professional legal documents for your business in minutes.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <WebsiteJsonLd />
        <link rel="alternate" type="application/rss+xml" title="LegalKit Blog" href="/blog/rss.xml" />
      </head>
      <body className={`${inter.className} antialiased flex flex-col min-h-screen bg-white`}>
        <DisclaimerBanner />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
