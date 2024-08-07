import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Study Projects // Felipe Frantz Zanini',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
