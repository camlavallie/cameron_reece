import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cameronreece.com'),
  title: 'Cameron Reece | Design • Systems • Strategy',
  description:
    'Design, development, and CRM systems built with clarity and intention.',
  openGraph: {
    title: 'Cameron Reece | Design • Systems • Strategy',
    description:
      'Design, development, and CRM systems built with clarity and intention.',
    url: 'https://cameronreece.com',
    siteName: 'Cameron Reece',
    images: [
      {
        url: 'https://cameronreece.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cameron Reece',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cameron Reece | Design • Systems • Strategy',
    description:
      'Design, development, and CRM systems built with clarity and intention.',
    images: ['https://cameronreece.com/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  )
}