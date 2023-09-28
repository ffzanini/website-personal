'use client'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'

import {
  MoonIcon,
  SunIcon,
  DragHandleHorizontalIcon,
} from '@radix-ui/react-icons'

import { fontRyanaLovely } from '@/app/fonts'
import { useTranslation } from '@/context'

export function Header() {
  const { location, setLocation, translations } = useTranslation()
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  function toggleLocaltion() {
    if (location === 'en') {
      setLocation('pt')
    } else {
      setLocation('en')
    }
  }
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full border-b border-gray-200 dark:border-gray-600">
      <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-4">
        <Link href="/">
          <motion.h1 className={fontRyanaLovely.className}>2fz</motion.h1>
        </Link>
        <div className="flex md:order-2 gap-4">
          <motion.button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            type="button"
            whileHover={{ scale: 1.1 }}
            className="bg-primary-low-opacity p-4 rounded-full hover:brightness-125 transition-all duration-300"
          >
            {theme === 'dark' ? (
              <MoonIcon width={24} height={24} />
            ) : (
              <SunIcon width={24} height={24} />
            )}
          </motion.button>
          <motion.button
            aria-label="Toggle language"
            onClick={toggleLocaltion}
            type="button"
            whileHover={{ scale: 1.1 }}
            className="bg-primary-low-opacity p-4 rounded-full hover:brightness-125 transition-all duration-300"
          >
            {location === 'en' ? <h3>PT</h3> : <h3>EN</h3>}
          </motion.button>
          <motion.button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-4 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <DragHandleHorizontalIcon width={24} height={24} />
          </motion.button>
        </div>
        <motion.div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <motion.ul className="flex flex-row gap-5">
            <motion.li className="hover:border-b border-gray-200 hover:brightness-125 transition-all duration-300 ">
              <Link href="/about">
                <h2>{translations.navbar.aboutPage}</h2>
              </Link>
            </motion.li>
            <motion.li className="hover:border-b border-gray-200 hover:brightness-125 transition-all duration-300 ">
              <Link href="/projects">
                <h2>{translations.navbar.projectsPage}</h2>
              </Link>
            </motion.li>
            <motion.li className="hover:border-b border-gray-200 hover:brightness-125 transition-all duration-300 ">
              <Link href="/contact">
                <h2>{translations.navbar.contactPage}</h2>
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  )
}
