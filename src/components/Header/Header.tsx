'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { motion, useScroll, useSpring } from 'framer-motion'
import { toast } from 'sonner'

import { useTheme } from 'next-themes'
import { US as UsFlag, BR as BrFlag } from 'country-flag-icons/react/3x2'
import { RxMoon, RxSun, RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

import { fontRyanaLovely } from '@/app/fonts'
import { useTranslation } from '@/context'
import { cn, animate } from '@/lib/utils'
import { indicator, container, item } from '@/constants/animations'
import { menu } from '@/constants/menu'
import { nightStalker, dawnbreaker } from '@/constants/phrases'

export function Header() {
  const { location, setLocation, translations } = useTranslation()
  const { theme, setTheme } = useTheme()
  const { scrollYProgress } = useScroll()

  const [phrases, setPhrases] = useState(
    theme === 'dark' ? 'Face the light!' : 'Darkness reigns!',
  )
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
      const url = new URL(window.location.href)
      url.searchParams.set('lang', 'pt')
      window.history.pushState({}, '', url.toString())

      url.searchParams.delete('lang')
      window.history.replaceState({}, '', url.pathname)
    } else {
      setLocation('en')
      const url = new URL(window.location.href)
      url.searchParams.set('lang', 'en')
      window.history.pushState({}, '', url.toString())

      url.searchParams.delete('lang')
      window.history.replaceState({}, '', url.pathname)
    }
  }

  function showRandomPhrases() {
    let randomIndex
    if (theme === 'dark') {
      randomIndex = Math.floor(Math.random() * nightStalker.length)
      setPhrases(nightStalker[randomIndex])
    } else {
      randomIndex = Math.floor(Math.random() * dawnbreaker.length)
      setPhrases(dawnbreaker[randomIndex])
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
      case 'resume':
        return translations.navbar.resumePage
      default:
    }
  }

  useEffect(() => {
    if (theme) {
      setCheckTheme(theme)
    }
  }, [theme])

  return (
    <nav className="fixed w-full backdrop-filter backdrop-blur bg-white-theme-background/40 dark:bg-dark-theme-background/40 z-10">
      <motion.div className="pl-1 pr-2 2xl:px-4 py-2 mx-auto flex flex-wrap items-center justify-between">
        <Link
          href="/"
          className={cn(
            `${fontRyanaLovely.className} opacity-60 transition-opacity duration-200 hover:opacity-100 h-full flex items-center px-3 pb-1`,
            {
              'opacity-100': pathname === '/',
            },
          )}
        >
          <motion.h2 variants={container} initial="hidden" animate="show">
            2fZ
          </motion.h2>
        </Link>
        <div className="flex 2xl:order-2 gap-3 2xl:min-w-[100px]">
          <motion.button
            aria-label="Toggle theme"
            onClick={() => {
              showRandomPhrases()
              toggleTheme()

              toast(
                <div className="flex flex-col">
                  &apos;{phrases}&apos;{' '}
                  <span className="opacity-60 italic">
                    - {theme === 'dark' ? 'Dawnbringer' : 'Night Stalker'}
                  </span>
                </div>,
                {
                  duration: 1500,
                },
              )
            }}
            type="button"
            whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
            variants={container}
            initial="hidden"
            animate="show"
            className="p-3"
          >
            {checkTheme !== 'dark' ? (
              <RxMoon className="icon-footer" />
            ) : (
              <RxSun className="icon-footer" />
            )}
          </motion.button>
          <motion.button
            aria-label="Toggle language"
            onClick={toggleLocaltion}
            type="button"
            whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
            variants={container}
            initial="hidden"
            animate="show"
            className="px-3 py-2"
          >
            {location === 'en' ? (
              <BrFlag title="Brazil" className="w-8 opacity-70" />
            ) : (
              <UsFlag title="United States" className="w-8 opacity-70" />
            )}
          </motion.button>
          <motion.button
            aria-label="Open menu"
            type="button"
            variants={container}
            initial="hidden"
            animate="show"
            className="inline-flex items-center p-2 justify-center 2xl:hidden hover:transition-all duration-300"
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
            'items-center justify-between w-full 2xl:flex 2xl:w-auto 2xl:order-1' +
            (navbarOpen ? ' flex' : ' hidden')
          }
          id="navbar-sticky"
        >
          <motion.ul
            className="flex flex-col 2xl:flex-row list-none 2xl:ml-auto gap-2 pt-6 2xl:pt-0"
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
                  <motion.div className="font-normal text-black dark:text-white">
                    {renderText(items.name)}
                    <motion.div
                      className="bg-black dark:bg-white h-[1px] w-full"
                      {...animate({
                        variants: indicator,
                        custom: hover === index || pathname === items.href,
                      })}
                    />
                  </motion.div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
      {pathname !== '/' &&
        pathname !== '/contact' &&
        pathname !== '/projects/study' && (
          <motion.div className="progress-bar" style={{ scaleX }} />
        )}
    </nav>
  )
}
