import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shivaflex | Pipes That Build a Stronger Future — PVC & Braided Hose India",
    template: "%s | Shivaflex",
  },
  description:
    "Leading PVC and braided hose manufacturer in India, operating since 1999. High-performance industrial piping for agriculture, construction, and infrastructure.",
  keywords: [
    "PVC hose manufacturer India",
    "braided hose",
    "suction hose",
    "delivery hose",
    "industrial hose",
    "Shivaflex",
    "Shivom Rubber Products",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
