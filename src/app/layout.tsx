import type { Metadata } from 'next'

import { Background, Header, Footer } from '@/components'
import { AppProvider } from '@/providers'
import { fontMavenPro } from './fonts'

import './globals.css'

const description = `Im ZAZA`
export const metadata: Metadata = {
  title: 'Felipe Frant Zanini | Software Engineer',
  openGraph: {
    type: 'website',
    url: 'https://ffzanini.dev',
    title: 'Felipe Frant Zanini | Software Engineer',
    description,
  },
  description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
