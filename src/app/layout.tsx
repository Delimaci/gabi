import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Enhanced metadata for SEO
export const metadata: Metadata = {
  title: "Gabi's Portfolio",
  description: "Explore Gabi's projects and skills in data engineering.",
  keywords: [
    "Gabi",
    "portfolio",
    "data engineering",
    "Next.js developer",
    "React developer",
    "web development",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Gabi&apos;s Portfolio",
    description:
      "Discover Gabi&apos;s projects in data engineering, specializing in modern web development with Next.js.",
    url: "https://gabidesign.uk",
    siteName: "Gabi&apos;s Portfolio",

    locale: "en_UK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* <Analytics /> */}
        <SpeedInsights />
      </body>
    </html>
  );
}
