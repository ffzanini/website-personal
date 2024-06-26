'use client'
import Image from 'next/image'
import Link from 'next/link'

import { useTranslation } from '@/context'
import { RichTextViewer, ScrollToTopButton, Wrapper } from '@/components'

export default function About() {
  const { translations } = useTranslation()

  return (
    <Wrapper>
      <div className="flex flex-col gap-2 p-4">
        <h1 className="font-bold">{translations.about.title}</h1>
        <h3 className="font-bold">{translations.about.sub_title}</h3>
        <div className="lg:grid grid-cols-1 flex flex-col gap-4 pb-4 lg:pb-12">
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
        <div className="lg:grid grid-cols-5 flex flex-col gap-4 pb-6 hidden lg:block">
          <Image
            src="/images/me_in_beach.jpeg"
            className="rounded"
            alt="Eu na praia"
            width={1200}
            height={128}
          />

          <Image
            src="/images/me_in_rocks.jpeg"
            className="rounded -mt-4"
            alt="Eu na praia mas nas pedras"
            width={1200}
            height={128}
          />

          <Image
            src="/images/me_main.jpeg"
            className="rounded"
            alt="Eu"
            width={1200}
            height={128}
          />

          <Image
            src="/images/me_sitdown.jpeg"
            className="rounded -mt-4"
            alt="Eu sentado na pedra"
            width={1200}
            height={128}
          />

          <Image
            src="/images/me_playing_piano.jpeg"
            className="rounded"
            alt="Eu tocando teclado"
            width={1200}
            height={128}
          />
        </div>
        <div className="flex flex-col gap-2 pb-6">
          <h2 className="font-bold">{translations.about.skills.title}</h2>
          <div className="lg:grid grid-cols-3 flex flex-col justify-start gap-8 lg:gap-8">
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
        <div className="flex flex-col gap-2 pb-6">
          <h2 className="font-bold">{translations.about.carrer.title}</h2>
          <div className="lg:grid grid-cols-2 flex flex-col justify-start gap-2">
            {translations.about.carrer.jobs.map((job) => (
              <div key={job.id}>
                <h4 className="font-bold">{job.title}</h4>
                <h4>{job.description}</h4>
                <p>{job.date}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:grid grid-cols-2 flex flex-col gap-2 pb-6 lg:pb-8">
          <div className="flex flex-col justify-start gap-2">
            <h2 className="font-bold">{translations.about.education.title}</h2>
            {translations.about.education.graduations.map((graduation) => (
              <div key={graduation.id}>
                <h4 className="font-bold">{graduation.title}</h4>
                <h4>{graduation.description}</h4>
                <p>{graduation.date}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-start gap-2 pt-6 lg:pt-0">
            <h2 className="font-bold">{translations.about.courses.title}</h2>
            {translations.about.courses.graduations_extra.map((course) => (
              <div key={course.id}>
                <h4 className="font-bold">{course.title}</h4>
                <h4>{course.description}</h4>
                <p>{course.date}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col pb-6 gap-8 lg:w-3/5 ">
          <div className="text-left">
            <h3 className="font-bold">
              {translations.about.about_section.about_title}
            </h3>
            <RichTextViewer
              content={translations.about.about_section.about_description}
            />
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
