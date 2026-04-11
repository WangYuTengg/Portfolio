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
  title: "Ethan Wang | Full-Stack Software Engineer",
  description:
    "Full-stack software engineer building production AI systems, web apps, and developer tools with TypeScript. Founding team at Voltade. NTU CS & Econ.",
  keywords: [
    "Ethan Wang",
    "software engineer",
    "full-stack developer",
    "TypeScript",
    "React",
    "AI",
    "Singapore",
    "NTU",
    "Voltade",
  ],
  authors: [{ name: "Ethan Wang" }],
  openGraph: {
    title: "Ethan Wang | Full-Stack Software Engineer",
    description:
      "Building production AI systems, full-stack web apps, and developer tools with TypeScript across the stack.",
    url: "https://wangyutengg.github.io",
    siteName: "Ethan Wang",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://wangyutengg.github.io/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ethan Wang — Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan Wang | Full-Stack Software Engineer",
    description:
      "Building production AI systems, full-stack web apps, and developer tools with TypeScript across the stack.",
    images: ["https://wangyutengg.github.io/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
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
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
