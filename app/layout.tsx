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
    default: "Shivaflex | Ready to Challenge — Flexibility 'N' Strength",
    template: "%s | Shivaflex",
  },
  description:
    "PVC and braided hose manufacturer, operating since 1999. Serving agriculture, construction, industry, and infrastructure across India.",
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
