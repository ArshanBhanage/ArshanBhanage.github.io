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
  title: "Arshan Bhanage | Software Engineer & AI Enthusiast",
  description:
    "Portfolio of Arshan Bhanage - Software Engineer specializing in AI/ML, Full Stack Development, and Enterprise Systems. MS Computer Software Engineering at SJSU.",
  keywords: [
    "Arshan Bhanage",
    "Software Engineer",
    "AI",
    "Machine Learning",
    "Full Stack Developer",
    "San Jose State University",
    "SJSU",
    "Java",
    "Python",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Arshan Bhanage" }],
  openGraph: {
    title: "Arshan Bhanage | Software Engineer & AI Enthusiast",
    description:
      "Software Engineer specializing in AI/ML, Full Stack Development, and Enterprise Systems.",
    type: "website",
    locale: "en_US",
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
