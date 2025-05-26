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
  title: "Setupify - Visual Platform for Gamer & Developer Setups",
  description: "Discover, tag, and shop the exact products from your favorite gaming and development setups. Join our community of creators and enthusiasts.",
  keywords: ["gaming setup", "developer setup", "battlestation", "desk setup", "gaming gear", "tech setup"],
  authors: [{ name: "Setupify Team" }],
  openGraph: {
    title: "Setupify - Visual Platform for Gamer & Developer Setups",
    description: "Discover, tag, and shop the exact products from your favorite gaming and development setups.",
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
      </body>
    </html>
  );
}
