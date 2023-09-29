'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { useTranslation } from '@/context'

export default function PricipalPage() {
  const { translations } = useTranslation()

  return (
    <motion.section
      className="container items-center justify-center py-52"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <Image
          src="/images/user-eu.jpeg"
          alt="eu"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div className="flex flex-col items-center justify-center gap-4">
          <h1>{translations.home.name}</h1>
          <h2>
            {translations.home.descriptionCompany}
            <motion.a
              className="text-[1.5rem] font-black hover:text-primary-light dark:hover:text-primary-dark hover:transition-all duration-300"
              href="https://www.nav9.tech"
            >
              {translations.home.company}
            </motion.a>
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
        <Link
          href="/about"
          className="px-2 py-2 md:px-4 md:py-4 bg-white text-center border border-gray-200 focus:outline-none hover:bg-primary-light rounded-full dark:bg-gray-900 dark:border-gray-600 dark:hover:bg-primary-dark dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <h3>Leia mais sobre mim</h3>
        </Link>
      </div>
    </motion.section>
  )
}
