'use client'
import React from 'react'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useTheme } from 'next-themes'

import {
  MoonIcon,
  SunIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from '@radix-ui/react-icons'

import { fontRyanaLovely } from '@/app/fonts'
import { useTranslation } from '@/context'

export function Header() {
  const { location, setLocation, translations } = useTranslation()
  const { theme, setTheme } = useTheme()
  const { scrollYProgress } = useScroll()

  const [navbarOpen, setNavbarOpen] = React.useState(false)

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

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
    <nav className="fixed w-full backdrop-filter backdrop-blur bg-gray-0 dark:bg-gray-900 md:bg-opacity-gray-0 md:dark:bg-opacity-gray-900 z-10">
      <div className="px-4 py-2 mx-auto flex flex-wrap items-center justify-between">
        <Link href="/">
          <motion.h2
            className={fontRyanaLovely.className}
            variants={container}
            initial="hidden"
            animate="show"
          >
            2fZ
          </motion.h2>
        </Link>
        <div className="flex md:order-2 gap-3 md:min-w-[100px]">
          <motion.button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            type="button"
            whileHover={{ scale: 1.1 }}
            variants={container}
            initial="hidden"
            animate="show"
            className="p-3 hover:bg-primary-light-low-opacity rounded-full dark:hover:bg-primary-dark-low-opacity hover:transition-all duration-300"
          >
            {theme === 'dark' ? (
              <MoonIcon width={21} height={21} />
            ) : (
              <SunIcon width={21} height={21} />
            )}
          </motion.button>
          <motion.button
            aria-label="Toggle language"
            onClick={toggleLocaltion}
            type="button"
            whileHover={{ scale: 1.1 }}
            variants={container}
            initial="hidden"
            animate="show"
            className="px-3 py-2 hover:bg-primary-light-low-opacity rounded-full dark:hover:bg-primary-dark-low-opacity hover:transition-all duration-300"
          >
            {location !== 'en' ? (
              <p className="text-black dark:text-white">PT</p>
            ) : (
              <p className="text-black dark:text-white">EN</p>
            )}
          </motion.button>
          <motion.button
            aria-label="Open menu"
            type="button"
            variants={container}
            initial="hidden"
            animate="show"
            className="inline-flex items-center p-2 justify-center md:hidden hover:transition-all duration-300"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {!navbarOpen ? (
              <HamburgerMenuIcon width={21} height={21} />
            ) : (
              <Cross1Icon width={21} height={21} />
            )}
          </motion.button>
        </div>
        <motion.div
          className={
            'items-center justify-between w-full md:flex md:w-auto md:order-1' +
            (navbarOpen ? ' flex' : ' hidden')
          }
          id="navbar-sticky"
        >
          <motion.ul
            className="flex flex-col md:flex-row list-none lg:ml-auto gap-2 pt-6 md:pt-0"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.li
              variants={item}
              className="px-5 py-3 hover:bg-primary-light-low-opacity rounded-sm dark:hover:bg-primary-dark-low-opacity hover:transition-all duration-300"
            >
              <Link href="/about" onClick={() => setNavbarOpen(false)}>
                <p className="font-thin text-black dark:text-white">
                  {translations.navbar.aboutPage}
                </p>
              </Link>
            </motion.li>
            {/* <motion.li
              variants={item}
              className="px-5 py-3 hover:bg-primary-light-low-opacity rounded-sm dark:hover:bg-primary-dark-low-opacity hover:transition-all duration-300"
            >
              <Link href="/contents" onClick={() => setNavbarOpen(false)}>
                <p className="font-thin text-black dark:text-white">{translations.navbar.contentsPage}</p>
              </Link>
            </motion.li> */}
            <motion.li
              variants={item}
              className="px-5 py-3 hover:bg-primary-light-low-opacity rounded-sm dark:hover:bg-primary-dark-low-opacity hover:transition-all duration-300"
            >
              <Link href="/projects" onClick={() => setNavbarOpen(false)}>
                <p className="font-thin text-black dark:text-white">
                  {translations.navbar.projectsPage}
                </p>
              </Link>
            </motion.li>
            <motion.li
              variants={item}
              className="px-5 py-3 hover:bg-primary-light-low-opacity rounded-sm dark:hover:bg-primary-dark-low-opacity hover:transition-all duration-300"
            >
              <Link href="/contact" onClick={() => setNavbarOpen(false)}>
                <p className="font-thin text-black dark:text-white">
                  {translations.navbar.contactPage}
                </p>
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>

      <motion.div className="progress-bar" style={{ scaleX }} />
    </nav>
  )
}
