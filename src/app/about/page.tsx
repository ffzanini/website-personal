'use client'
import Image from 'next/image'

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
          <div className="flex flex-col gap-4 text-justify">
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
            <RichTextViewer
              content={translations.about.description.description_five}
            />
          </div>
        </div>
        <div className="lg:grid grid-cols-5 flex flex-col gap-4 pb-4 hidden lg:block">
          <Image
            src="/images/me_in_beach.jpeg"
            className="rounded"
            alt="eu"
            width={1200}
            height={128}
          />

          <Image
            src="/images/me_in_rocks.jpeg"
            className="rounded -mt-4"
            alt="eu"
            width={1200}
            height={128}
          />

          <Image
            src="/images/me_main.jpeg"
            className="rounded"
            alt="eu"
            width={1200}
            height={128}
          />

          <Image
            src="/images/me_sitdown.jpeg"
            className="rounded -mt-4"
            alt="eu"
            width={1200}
            height={128}
          />

          <Image
            src="/images/me_playing_piano.jpeg"
            className="rounded"
            alt="eu"
            width={1200}
            height={128}
          />
        </div>
        <div className="flex flex-col gap-2 pb-6">
          <h2 className="font-bold">{translations.about.carrer.title}</h2>
          <div className="lg:grid grid-cols-2 flex flex-col justify-start gap-2">
            {translations.about.carrer.jobs.map((job) => (
              <div key={job.id}>
                <h3 className="font-bold">{job.title}</h3>
                <h3>{job.description}</h3>
                <p className="font-thin">{job.date}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:grid grid-cols-2 flex flex-col gap-2 pb-6 lg:pb-8">
          <div className="flex flex-col justify-start gap-2">
            <h2 className="font-bold">{translations.about.education.title}</h2>
            {translations.about.education.graduations.map((graduation) => (
              <div key={graduation.id}>
                <h3 className="font-bold">{graduation.title}</h3>
                <h3>{graduation.description}</h3>
                <p className="font-thin">{graduation.date}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-start gap-2">
            <h2 className="font-bold">{translations.about.courses.title}</h2>
            {translations.about.courses.graduations_extra.map((course) => (
              <div key={course.id}>
                <h3 className="font-bold">{course.title}</h3>
                <h3>{course.description}</h3>
                <p className="font-thin">{course.date}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:grid grid-cols-2 pb-6 gap-8 lg:gap-2">
          <div className="text-justify lg:text-left">
            <h2 className="font-bold">
              {translations.about.about_section.about_title}
            </h2>

            <RichTextViewer
              content={translations.about.about_section.about_description}
            />
          </div>
          <div className="text-justify lg:text-left">
            <h2 className="font-bold">
              {translations.about.about_contact.contact_title}
            </h2>
            <RichTextViewer
              content={translations.about.about_contact.contact_description}
            />
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </Wrapper>
  )
}
