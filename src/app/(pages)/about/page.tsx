'use client'
import Link from 'next/link'

import { useTranslation } from '@/context'
import {
  RichTextViewer,
  ScrollToTopButton,
  Wrapper,
  ZoomImage,
} from '@/components'

export default function About() {
  const { translations } = useTranslation()

  return (
    <Wrapper>
      <div className="flex flex-col gap-2 p-4">
        <h1 className="font-bold">{translations.about.title}</h1>
        <h3 className="font-bold">{translations.about.sub_title}</h3>
        <div className="2xl:grid grid-cols-1 flex flex-col gap-4 pb-4 2xl:pb-12">
          <div className="flex flex-col gap-4">
            <RichTextViewer
              content={translations.about.description.description_one}
            />
            <RichTextViewer
              content={translations.about.description.description_two}
            />
            <RichTextViewer
              content={translations.about.description.description_three}
            />
            <RichTextViewer
              content={translations.about.description.description_four}
            />
          </div>
        </div>
        <div className="2xl:grid grid-cols-5 flex flex-col gap-4 pb-6 hidden 2xl:block">
          <ZoomImage
            src="/images/me_in_beach.jpeg"
            alt="Eu na praia"
            width={366}
            height={512}
            className="rounded"
          />

          <ZoomImage
            src="/images/me_in_rocks.jpeg"
            alt="Eu na praia mas nas pedras"
            width={366}
            height={512}
            className="rounded -mt-4"
          />

          <ZoomImage
            src="/images/me_main.jpeg"
            alt="Eu"
            width={366}
            height={512}
            className="rounded"
          />

          <ZoomImage
            src="/images/me_sitdown.jpeg"
            alt="Eu sentado na pedra"
            width={300}
            height={480}
            className="rounded -mt-4"
          />

          <ZoomImage
            src="/images/me_playing_piano.jpeg"
            alt="Eu tocando teclado"
            width={366}
            height={512}
            className="rounded"
          />
        </div>
        <div className="flex flex-col gap-2 pb-6">
          <h2 className="font-bold">{translations.about.skills.title}</h2>
          <div className="2xl:grid grid-cols-3 flex flex-col justify-start gap-8 2xl:gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">
                {translations.about.skills.strong.title}
              </h3>
              <p>{translations.about.skills.strong.description}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">
                {translations.about.skills.medium.title}
              </h3>
              <p>{translations.about.skills.medium.description}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">
                {translations.about.skills.weak.title}
              </h3>
              <p>{translations.about.skills.weak.description}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col pb-6 gap-8">
          <div className="text-left">
            <h3 className="font-bold">
              {translations.about.about_section.about_title}
            </h3>
            <p className="inline-block">
              <RichTextViewer
                content={translations.about.about_section.about_description_one}
                typeText="span"
              />
              <Link href="/projects" className="underline font-bold">
                {translations.about.about_section.about_description_text}
              </Link>
              {translations.about.about_section.about_description_two}
            </p>
          </div>

          <div className="text-left">
            <h3 className="font-bold">
              {translations.about.about_contact.contact_title}
            </h3>
            <p>
              {translations.about.about_contact.contact_description_one}
              <Link href="/contact" className="underline font-bold">
                {translations.about.about_contact.contact_link_one}
              </Link>
              {translations.about.about_contact.contact_description_two}
              <Link
                href="https://www.linkedin.com/in/ffzanini/"
                className="underline font-bold"
                target="_blank"
              >
                {translations.about.about_contact.contact_link_two}
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </Wrapper>
  )
}
