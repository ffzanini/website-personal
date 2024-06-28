'use client'
import Image from 'next/image'
import Link from 'next/link'

import { useTranslation } from '@/context'
import { Ascii, RichTextViewer, Wrapper } from '@/components'
import { coffeAscii } from '@/constants/ascii'

export default function PricipalPage() {
  const { translations } = useTranslation()

  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <Image
          src="/images/me-desenho.jpeg"
          alt="Profile photo"
          width={180}
          height={180}
          className="rounded-full border border-gray-900 dark:border-gray-50"
        />
        <div className="flex flex-col items-center justify-center gap-2 p-2">
          <h2>{translations.home.name}</h2>
          <h3>{translations.home.roles}</h3>
          <div className="flex flex-col items-center justify-center lg:text-center gap-6 pt-6">
            <RichTextViewer content={translations.home.description} />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-center gap-4 lg:gap-12 p-6 items-center">
        <Link
          href="/about"
          className="w-full lg:w-auto text-center rounded-full bg-black hover:bg-primary-color-800 border border-gray-200 
          dark:bg-white  dark:border-gray-600 dark:hover:bg-primary-color-300 dark:hover:border-gray-600"
        >
          <p className="text-white dark:text-black px-2 py-2 lg:px-8 lg:py-4">
            {translations.home.textButtonAbout}
          </p>
        </Link>
        <Link className="underline font-bold" href="/resume">
          {translations.home.textButtonResume}
        </Link>
      </div>
      <div className="hidden lg:flex">
        <Ascii className="absolute top-0 opacity-20 max-w-full max-h-full">
          {coffeAscii}
        </Ascii>
      </div>
    </Wrapper>
  )
}
