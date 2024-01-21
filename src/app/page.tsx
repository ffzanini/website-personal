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
          alt="Profile photo"
          width={180}
          height={180}
          className="rounded-full border border-gray-900 dark:border-gray-50"
        />
        <div className="flex flex-col items-center justify-center gap-2 p-2">
          <h2>{translations.home.name}</h2>
          <h3>{translations.home.roles}</h3>
          <div className="flex flex-col items-center justify-center md:text-center gap-6 pt-6">
            <RichTextViewer content={translations.home.description} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-center gap-4 p-6 md:p-6">
        <Link
          href="/about"
          className="font-thin px-2 py-2 md:px-8 md:py-4 bg-white text-center border border-gray-200 focus:outline-none hover:bg-primary-light rounded-full dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-primary-dark dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <p>{translations.home.textButtonAbout}</p>
        </Link>
      </div>
    </Wrapper>
  )
}
