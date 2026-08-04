import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0b0517",
};

export const metadata: Metadata = {
  title: "Grape Dawn | BNI Nexora Speed Member Matching Quiz",
  description:
    "Interactive real-time speed member-matching presentation game by Grape Dawn for BNI Nexora chapter. Test your business referral knowledge in a 30-second speed challenge!",
  keywords: [
    "Grape Dawn",
    "BNI Nexora",
    "Member Referral Quiz",
    "Speed Matching Game",
    "Business Referral Quiz",
    "Interactive Presentation Game",
    "Networking Game",
  ],
  authors: [{ name: "Grape Dawn" }],
  creator: "Grape Dawn",
  publisher: "Grape Dawn",
  applicationName: "Grape Dawn Quiz",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://emojigame.vercel.app"
  ),
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Grape Dawn | BNI Nexora Speed Member Matching Quiz",
    description:
      "Join the live real-time speed matching quiz game! Test your referral knowledge & compete on the live TV leaderboard.",
    siteName: "Grape Dawn",
    images: [
      {
        url: "/logo-horizental.png",
        width: 1200,
        height: 630,
        alt: "Grape Dawn BNI Nexora Quiz",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grape Dawn | BNI Nexora Speed Member Matching Quiz",
    description:
      "Interactive real-time speed member-matching presentation game by Grape Dawn.",
    images: ["/logo-horizental.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0517] text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}
