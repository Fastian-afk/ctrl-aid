import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ctrl+Aid — AI Emergency Information Platform",
  description:
    "AI-powered emergency platform delivering verified disaster updates, nearby shelters, emergency contacts, and safety guidance for Pakistan.",
  keywords: [
    "emergency",
    "disaster",
    "AI",
    "Pakistan",
    "flood",
    "shelter",
    "NDMA",
    "relief",
  ],
  openGraph: {
    title: "Ctrl+Aid — AI Emergency Information Platform",
    description:
      "Verified updates. Smart guidance. Safer communities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-navy-950 text-white font-sans">
        {children}
      </body>
    </html>
  );
}
