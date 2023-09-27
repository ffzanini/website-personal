'use client'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'
import { InternacionalizaionProvider } from '@/context/internacionalization-context'

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <InternacionalizaionProvider>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'var(--bg)',
              border: '1px solid var(--text-color)',
              color: 'var(--text-color)',
            },
          }}
        />
        {children}
      </InternacionalizaionProvider>
    </ThemeProvider>
  )
}

export default AppProvider
