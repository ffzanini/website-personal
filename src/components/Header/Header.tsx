'use client'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

import { fontRyanaLovely } from '@/app/fonts'
import { useTranslation } from '@/context'

export function Header() {
  const { location, setLocation } = useTranslation()
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    if (theme === 'dark') {
      setTheme('light')
      localStorage.setItem('THEME', 'light')
    } else {
      setTheme('dark')
      localStorage.setItem('THEME', 'dark')
    }
  }

  function toggleLocaltion() {
    if (location === 'en') {
      setLocation('pt')
      localStorage.setItem('LOCATION', 'pt')
    } else {
      setLocation('en')
      localStorage.setItem('LOCATION', 'en')
    }
  }
  return (
    <div>
      <h1 className={fontRyanaLovely.className}>2fz</h1>
      <motion.button
        aria-label="Toggle theme"
        onClick={toggleTheme}
        type="button"
        className="bg-dark-mode p-2"
      >
        {theme === 'dark' ? (
          <MoonIcon width={16} height={16} />
        ) : (
          <SunIcon width={16} height={16} />
        )}
      </motion.button>
      <motion.button
        aria-label="Toggle language"
        onClick={toggleLocaltion}
        type="button"
        className="bg-primary-light p-2"
      >
        {location === 'en' ? <p>PT</p> : <p>EN</p>}
      </motion.button>
    </div>
  )
}
