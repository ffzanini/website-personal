'use client'
import { HeartIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'

import { useTranslation } from '@/context'
import { socials } from '@/constants'

export function Footer() {
  const { translations } = useTranslation()
  const yearNow = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 flex flex-col md:flex-row justify-between items-center">
      <div className="px-6 pt-6 md:pt-0">
        <div className="container flex justify-center">
          <h3 className="flex flex-col md:flex-row ">
            ©{yearNow} {translations.footer.by}
          </h3>
        </div>
      </div>
      <div className="px-6 pt-6">
        <div className="container mb-6 flex justify-center">
          <div className="flex flex-row gap-4 items-center">
            {socials.map(({ href, icon: Icon, name }) => (
              <motion.a
                aria-label={name}
                target="_blank"
                key={href}
                href={href}
                whileHover={{ scale: 1.2 }}
                className="bg-primary-low-opacity rounded-full aspect-square p-2 flex justify-center items-center hover:brightness-250 transition-all duration-300"
              >
                <Icon width={24} height={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
