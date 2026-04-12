import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Cameron Reece | Design • Systems • Strategy',
  description:
    'Design, development, and CRM systems built with clarity and intention.',
  openGraph: {
    title: 'Cameron Reece',
    description:
      'Design, development, and CRM systems built with clarity and intention.',
    url: 'https://yourdomain.com',
    siteName: 'Cameron Reece',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
}

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
      <body className="min-h-full flex flex-col">
        {children},
    <Navbar />
      
      </body>
    </html>
  );
}
