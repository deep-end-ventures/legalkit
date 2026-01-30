import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LegalKit — AI-Powered Legal Document Generator",
  description: "Generate professional privacy policies, terms of service, and cookie policies for your business in minutes. Free tier available. LegalKit is a template generator, not a law firm.",
  keywords: ["privacy policy generator", "terms of service generator", "cookie policy", "legal documents", "GDPR", "CCPA"],
  openGraph: {
    title: "LegalKit — Legal Document Generator",
    description: "Generate professional legal documents for your business in minutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen bg-white`}>
        <DisclaimerBanner />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
