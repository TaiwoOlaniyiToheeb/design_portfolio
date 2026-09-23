import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const heading = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

const siteUrl = "https://toheeb-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Toheeb — Graphic Designer in Lagos, Nigeria",
    template: "%s | Toheeb",
  },
  description:
    "Taiwo Olaniyi Toheeb is a graphic designer creating clean, purposeful visual communication for brands, businesses, organisations, events, and individuals.",
  openGraph: {
    title: "Toheeb — Graphic Designer in Lagos, Nigeria",
    description:
      "Clean, engaging, and purposeful visual communication for brands, events, and individuals.",
    url: siteUrl,
    siteName: "Toheeb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toheeb — Graphic Designer in Lagos, Nigeria",
    description:
      "Clean, engaging, and purposeful visual communication for brands, events, and individuals.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-body antialiased flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
