import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stack // Felipe Frantz Zanini',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
