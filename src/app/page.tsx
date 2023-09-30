'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { useTranslation } from '@/context'
import { Wrapper } from '@/components'

export default function PricipalPage() {
  const { translations } = useTranslation()

  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <Image
          src="/images/user-eu.jpeg"
          alt="eu"
          width={150}
          height={150}
          className="rounded-full"
        />
        <div className="flex flex-col items-center justify-center gap-1">
          <h1>{translations.home.name}</h1>
          <h2>{translations.home.roles}</h2>
          <div className="flex flex-col items-center justify-center gap-6 pt-3">
            <h3>{translations.home.descriptionPartOne}</h3>
            <h3>{translations.home.descriptionPartTwo}</h3>
            <h3>{translations.home.descriptionPartThree}</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 p-4">
        <Link
          href="/about"
          className="px-2 py-2 md:px-4 md:py-4 bg-white text-center border border-gray-200 focus:outline-none hover:bg-primary-light rounded-full dark:bg-gray-900 dark:border-gray-600 dark:hover:bg-primary-dark dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <h3>Leia mais sobre mim</h3>
        </Link>
      </div>
    </Wrapper>
  )
}
