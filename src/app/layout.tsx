import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AppScales · Building and scaling apps",
  description:
    "A studio that builds, launches, and scales apps. $390k MRR and $6M+ generated.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-navy font-sans">
        {children}
        {/* Contentsquare analytics (site-wide). afterInteractive == the
            original async tag: loads early, never blocks rendering. */}
        <Script
          src="https://t.contentsquare.net/uxa/dce3560f65157.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
