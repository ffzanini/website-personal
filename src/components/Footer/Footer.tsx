'use client'
import { motion } from 'framer-motion'

import { useTranslation } from '@/context'
import { socials } from '@/constants/socials'

export function Footer() {
  const { translations } = useTranslation()
  const yearNow = new Date().getFullYear()

  return (
    <motion.footer
      className="flex flex-col md:flex-row bg-gray-0 dark:bg-gray-900 justify-between items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="px-6 pt-6 md:pt-0">
        <div className="container flex justify-center">
          <p className="flex flex-col md:flex-row text-black dark:text-white">
            ©{yearNow} {translations.footer.by}
          </p>
        </div>
      </div>
      <div className="px-6 pt-6">
        <div className="container mb-6 flex justify-center">
          <div className="flex flex-row gap-3 items-center">
            {socials.map(({ href, icon: Icon, name }) => (
              <motion.a
                aria-label={name}
                target="_blank"
                key={href}
                href={href}
                whileHover={{ scale: 1.2 }}
                className="hover:bg-primary-light-low-opacity dark:hover:bg-primary-dark-low-opacity rounded-full p-2 flex justify-center items-center hover:brightness-250 transition-all duration-300"
              >
                <Icon width={21} height={21} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
