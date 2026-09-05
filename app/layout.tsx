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
  title: { default: "Shivaflex | Industrial PVC & Braided Hose Manufacturer", template: "%s | Shivaflex" },
  description: "Shivaflex manufactures PVC suction, braided, delivery and industrial hose products in India since 1999.",
  keywords: ["PVC hose manufacturer India", "braided hose", "suction hose", "delivery hose", "industrial hose"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={inter.variable}><body className={`${inter.className} font-sans`}><Header />{children}<Footer /></body></html>;
}

