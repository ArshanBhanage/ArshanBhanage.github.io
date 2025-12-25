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
  title: "Arshan Bhanage | MSSE (Data Science) Portfolio",
  description:
    "Portfolio of Arshan Bhanage - Software Engineer & ML Practitioner specializing in AI/ML, Data Science, RAG Systems, and Enterprise Backend. MS Software Engineering (Data Science) at San Jose State University.",
  keywords: [
    "Arshan Bhanage",
    "Software Engineer",
    "Data Scientist",
    "Machine Learning Engineer",
    "AI",
    "Machine Learning",
    "Data Mining",
    "RAG Systems",
    "LLM Fine-Tuning",
    "San Jose State University",
    "SJSU",
    "Python",
    "Java",
    "LangChain",
    "PyTorch",
  ],
  authors: [{ name: "Arshan Bhanage" }],
  openGraph: {
    title: "Arshan Bhanage | MSSE (Data Science) Portfolio",
    description:
      "Software Engineer & ML Practitioner specializing in AI/ML, Data Science, and Enterprise Systems.",
    type: "website",
    locale: "en_US",
    url: "https://arshanbhanage.github.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arshan Bhanage | MSSE (Data Science) Portfolio",
    description: "Software Engineer & ML Practitioner at SJSU",
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
