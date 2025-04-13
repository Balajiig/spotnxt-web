import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Run smarter ads without a marketing team – with Spotnxt AI",
  description:
    "Spotnxt is your AI ad assistant that plans, designs, launches, and optimizes your ads across Meta and Google — no expertise needed.",
  metadataBase: new URL("https://www.spotnxt.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Run smarter ads with Spotnxt AI",
    description: "Let Spotnxt AI run your digital ads while you sleep. No marketing team required.",
    url: "https://www.spotnxt.com",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Assuming it's in /public
        width: 1200,
        height: 630,
        alt: "Spotnxt AI preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Run smarter ads with Spotnxt AI",
    description: "Spotnxt AI creates, runs, and optimizes your ads with zero marketing effort.",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
