import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact // Felipe Frantz Zanini',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
