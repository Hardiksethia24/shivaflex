import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: { default: "Shivaflex | Industrial PVC & Braided Hose Manufacturer", template: "%s | Shivaflex" },
  description: "Shivaflex manufactures PVC suction, braided, delivery and industrial hose products in India since 1999.",
  keywords: ["PVC hose manufacturer India", "braided hose", "suction hose", "delivery hose", "industrial hose"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="font-sans"><Header />{children}<Footer /></body></html>;
}
