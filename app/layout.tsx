import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-black text-white">
        <Navbar />
        <main className="pt-[68px]">{children}</main>
      </body>
    </html>
  )
}
