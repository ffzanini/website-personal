import type { Metadata } from 'next'

import { Background, Header, Footer } from '@/components'
import { AppProvider } from '@/providers'
import { fontMavenPro } from './fonts'

import './globals.css'

const description = `A simple men, software engineer, artist, musician, writer and a indie developer enthusiast`
export const metadata: Metadata = {
  title: 'Felipe Frant Zanini | Software Engineer',
  icons: '/favicon.ico',
  openGraph: {
    type: 'website',
    url: 'https://ffzanini.dev',
    title: 'Felipe Frant Zanini | Software Engineer',
    description,
    images: [
      {
        url: '/images/visit-card.png',
        width: 1200,
        height: 630,
        alt: 'Felipe Frant Zanini | Software Engineer',
      },
    ],
  },
  description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={fontMavenPro.className}>
        <AppProvider>
          <Background />
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
