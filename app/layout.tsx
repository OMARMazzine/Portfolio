import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Omar Mazzine | AI & Data Science Portfolio',
  description: 'Engineering student in Data Science & Artificial Intelligence at ENSIASD. Passionate about computer vision, machine learning, and intelligent systems. Experienced in developing AI-driven visual analysis solutions.',
  keywords: ['AI', 'Data Science', 'Machine Learning', 'Computer Vision', 'Python', 'TensorFlow', 'OpenCV', 'Portfolio'],
  authors: [{ name: 'Omar Mazzine' }],
  creator: 'Omar Mazzine',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Omar Mazzine | AI & Data Science Portfolio',
    description: 'Engineering student in Data Science & Artificial Intelligence at ENSIASD. Passionate about computer vision, machine learning, and intelligent systems.',
    siteName: 'Omar Mazzine Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar Mazzine | AI & Data Science Portfolio',
    description: 'Engineering student in Data Science & Artificial Intelligence at ENSIASD.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: '#0a0f1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
