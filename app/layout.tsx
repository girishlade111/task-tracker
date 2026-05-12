import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://task-tracker.example.com'),
  title: {
    default: 'Task Tracker - Manage Your Tasks Efficiently',
    template: '%s | Task Tracker',
  },
  description: 'Task Tracker helps you organize, prioritize, and complete your tasks efficiently. Boost productivity with our intuitive task management solution.',
  keywords: ['task tracker', 'task management', 'to-do list', 'productivity', 'task organizer', 'project management', 'daily tasks', 'workflow'],
  authors: [{ name: 'Task Tracker Team' }],
  creator: 'Task Tracker',
  publisher: 'Task Tracker',
  generator: 'Next.js',
  applicationName: 'Task Tracker',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://task-tracker.example.com',
    siteName: 'Task Tracker',
    title: 'Task Tracker - Manage Your Tasks Efficiently',
    description: 'Task Tracker helps you organize, prioritize, and complete your tasks efficiently. Boost productivity with our intuitive task management solution.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Task Tracker - Organize Your Tasks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Task Tracker - Manage Your Tasks Efficiently',
    description: 'Task Tracker helps you organize, prioritize, and complete your tasks efficiently.',
    images: ['/og-image.png'],
    creator: '@tasktracker',
  },
  alternates: {
    canonical: 'https://task-tracker.example.com',
    languages: {
      en: 'https://task-tracker.example.com',
    },
  },
  category: 'productivity',
  classification: 'Business Software',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
