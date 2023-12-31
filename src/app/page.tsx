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
          src="/images/me_home.jpeg"
          alt="eu"
          width={200}
          height={200}
          className="rounded-full border-2 border-gray-900 dark:border-gray-50"
        />
        <div className="flex flex-col items-center justify-center gap-2 p-2">
          <h1>{translations.home.name}</h1>
          <h2>{translations.home.roles}</h2>
          <div className="flex flex-col items-center justify-center text-justify gap-6 pt-6">
            <RichTextViewer content={translations.home.descriptionPartOne} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-center gap-4 p-6 md:p-16">
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
