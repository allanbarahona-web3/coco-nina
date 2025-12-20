import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Coco Nina Jewelry | Handmade Unique Pieces",
  description: "Premium handmade jewelry. Every piece is unique, crafted with fine wire-wrapping techniques and premium materials. No replicas, only one-of-a-kind treasures.",
  keywords: ["handmade jewelry", "unique jewelry", "wire wrapping", "alambrismo", "artisan jewelry", "custom jewelry"],
  authors: [{ name: "Coco Nina Jewelry" }],
  openGraph: {
    title: "Coco Nina Jewelry | Handmade Unique Pieces",
    description: "Premium handmade jewelry crafted with fine wire-wrapping techniques.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
