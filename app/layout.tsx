import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tarun Mittal — Product Designer & UX Specialist',
  description:
    'Portfolio of Tarun Mittal — Creative product designer crafting meaningful digital experiences. Specializing in YouTube thumbnails, social media graphics, posters, and brand identity design.',
  keywords: [
    'Tarun Mittal',
    'product designer',
    'UX specialist',
    'graphic design',
    'YouTube thumbnails',
    'social media design',
    'brand identity',
    'portfolio',
  ],
  authors: [{ name: 'Tarun Mittal' }],
  openGraph: {
    title: 'Tarun Mittal — Product Designer & UX Specialist',
    description:
      'Creative product designer crafting meaningful digital experiences.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarun Mittal — Product Designer & UX Specialist',
    description:
      'Creative product designer crafting meaningful digital experiences.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
