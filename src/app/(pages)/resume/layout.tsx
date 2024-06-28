import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume // Felipe Frantz Zanini',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
