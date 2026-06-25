import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CommandPalette } from "@/features/site/components/command-palette";
import { ScrollProgress } from "@/features/site/components/scroll-progress";
import { SiteHeader } from "@/features/site/components/site-header";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: {
    default:
      "SRUJAN JAVAREGOWDA | AI Engineer, Full Stack Developer, Quant Developer",
    template: "%s | SRUJAN JAVAREGOWDA",
  },
  description:
    "Premium personal portfolio for an AI Engineer, Full Stack Developer, Machine Learning Engineer, Quant Developer, and Software Engineer.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title:
      "SRUJAN JAVAREGOWDA | AI Engineer, Full Stack Developer, Quant Developer",
    description:
      "A cinematic, production-ready portfolio built with Next.js 15, React 19, and modern motion design.",
    url: "https://example.com",
    siteName: "SRUJAN JAVAREGOWDA Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SRUJAN JAVAREGOWDA | AI Engineer, Full Stack Developer, Quant Developer",
    description: "A premium, performance-focused personal portfolio.",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#050505] text-white antialiased`}
      >
        <Providers>
          <ScrollProgress />
          <SiteHeader />
          <CommandPalette />
          {children}
        </Providers>
      </body>
    </html>
  );
}
