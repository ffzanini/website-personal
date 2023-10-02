'use client'
import Image from 'next/image'
import Link from 'next/link'

import { useTranslation } from '@/context'
import { RichTextViewer, Wrapper } from '@/components'

export default function PricipalPage() {
  const { translations } = useTranslation()

  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <Image
          src="/images/user-eu.jpeg"
          alt="eu"
          width={160}
          height={160}
          className="rounded-full border-2 border-gray-900 dark:border-gray-50"
        />
        <div className="flex flex-col items-center justify-center gap-1">
          <h1>{translations.home.name}</h1>
          <h2>{translations.home.roles}</h2>
          <div className="flex flex-col items-center justify-center gap-6 pt-3">
            <RichTextViewer content={translations.home.descriptionPartOne} />
            <RichTextViewer content={translations.home.descriptionPartTwo} />
            <RichTextViewer content={translations.home.descriptionPartThree} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 p-4">
        <Link
          href="/about"
          className="px-2 py-2 md:px-4 md:py-4 bg-white text-center border border-gray-200 focus:outline-none hover:bg-primary-light rounded-full dark:bg-gray-900 dark:border-gray-600 dark:hover:bg-primary-dark dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <h3>{translations.home.textButtonAbout}</h3>
        </Link>
      </div>
    </Wrapper>
  )
}
