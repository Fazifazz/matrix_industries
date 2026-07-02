import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matrix Industries | Self-Powered Intelligence Everywhere",
  description: "Matrix Industries pioneers self-powered sensing intelligence for health, security, and IoT. Energy-harvesting sensors for a smarter, autonomous world.",
  keywords: ["energy harvesting", "self-powered sensors", "IoT", "health wearables", "perimeter security"],
  authors: [{ name: "Matrix Industries" }],
  openGraph: {
    title: "Matrix Industries",
    description: "Self-Powered Intelligence Everywhere",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-transparent">
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
