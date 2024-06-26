'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useTheme } from 'next-themes'
import { US as UsFlag, BR as BrFlag } from 'country-flag-icons/react/3x2'

import { RxMoon, RxSun, RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

import { fontRyanaLovely } from '@/app/fonts'
import { useTranslation } from '@/context'
import { cn, animate } from '@/lib/utils'
import { indicator, container, item } from '@/constants/animations'
import { menu } from '@/constants/menu'

export function Header() {
  const { location, setLocation, translations } = useTranslation()
  const { theme, setTheme } = useTheme()
  const { scrollYProgress } = useScroll()

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [checkTheme, setCheckTheme] = useState<string | undefined>()
  const [hover, setHover] = useState<number | null>(null)

  const pathname = usePathname()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

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

  function renderText(name: string) {
    switch (name) {
      case 'about':
        return translations.navbar.aboutPage
      case 'contents':
        return translations.navbar.contentsPage
      case 'projects':
        return translations.navbar.projectsPage
      case 'contact':
        return translations.navbar.contactPage
      default:
        return 'undefined'
    }
  }

  useEffect(() => {
    if (theme) {
      setCheckTheme(theme)
    }
  }, [theme])

  return (
    <nav className="fixed w-full backdrop-filter backdrop-blur bg-gray-0 dark:bg-gray-900 md:bg-opacity-gray-0 md:dark:bg-opacity-gray-900 z-10">
      <motion.div className="px-4 py-2 mx-auto flex flex-wrap items-center justify-between">
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
            {checkTheme === 'dark' ? (
              <RxMoon title="Face the light!" width={21} height={21} />
            ) : (
              <RxSun title="Darkness reigns!" width={21} height={21} />
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
              <BrFlag
                title="Brazil"
                className="text-black dark:text-white w-8 opacity-70"
              />
            ) : (
              <UsFlag
                title="United States"
                className="text-black dark:text-white w-8 opacity-70"
              />
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
              <RxHamburgerMenu width={21} height={21} />
            ) : (
              <RxCross1 width={21} height={21} />
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
            {menu.map((items, index) => (
              <motion.li
                key={index}
                variants={item}
                className="w-full px-5 py-3 hover:bg-primary-light-low-opacity rounded-sm dark:hover:bg-primary-dark-low-opacity hover:transition-all duration-300"
                onHoverStart={() => setHover(index)}
                onHoverEnd={() => setHover(null)}
              >
                <Link
                  href={items.href}
                  onClick={() => setNavbarOpen(false)}
                  className={cn(
                    'opacity-60 transition-opacity duration-200 hover:opacity-100 h-full flex items-center px-3 pb-1',
                    {
                      'opacity-100': pathname === items.href,
                    },
                  )}
                >
                  <p className="font-light text-black dark:text-white">
                    {renderText(items.name)}
                    <motion.div
                      className="bg-black dark:bg-white h-[1px] w-full"
                      {...animate({
                        variants: indicator,
                        custom: hover === index || pathname === items.href,
                      })}
                    />
                  </p>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
      {pathname !== '/' && pathname !== '/contact' && (
        <motion.div className="progress-bar" style={{ scaleX }} />
      )}
    </nav>
  )
}
