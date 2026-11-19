import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-stage" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Gnuts, groundnut and peanut butter from Meerut",
  description:
    "Gnuts buys groundnuts from farms around Meerut, Uttar Pradesh, and packs peanut butter at its own plant. Scroll the farm-to-jar line and request a quote.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
