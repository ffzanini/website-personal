'use client'
import Image from 'next/image'

import { useTranslation } from '@/context'
import { RichTextViewer, ScrollToTopButton, Wrapper } from '@/components'

export default function About() {
  const { translations } = useTranslation()

  return (
    <Wrapper>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-bold">{translations.about.title}</h1>
        <h3 className="font-medium">{translations.about.sub_title}</h3>
        <div className="lg:grid grid-cols-2 flex flex-col gap-4">
          <div className="flex justify-center">
            <h3>{translations.about.description.description_one}</h3>
          </div>
          <div className="flex justify-center">
            <Image src="/images/user-eu.jpeg" alt="eu" width={420} height={0} />
          </div>
        </div>
        <div className="lg:grid grid-cols-3 flex flex-col">
          <div className="flex flex-col justify-start gap-5">
            <h1 className="font-bold">{translations.about.carrer.title}</h1>
            {translations.about.carrer.jobs.map((job) => (
              <div key={job.id}>
                <h2 className="font-bold">{job.title}</h2>
                <h3>{job.description}</h3>
                <p className="font-thin">{job.date}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-start gap-5">
            <h1 className="font-bold">{translations.about.education.title}</h1>
            {translations.about.education.graduations.map((graduation) => (
              <div key={graduation.id}>
                <h2 className="font-bold">{graduation.title}</h2>
                <h3>{graduation.description}</h3>
                <p className="font-thin">{graduation.date}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-start gap-5">
            <h1 className="font-bold">{translations.about.courses.title}</h1>
            {translations.about.courses.graduations_extra.map((course) => (
              <div key={course.id}>
                <h2 className="font-bold">{course.title}</h2>
                <h3>{course.description}</h3>
                <p className="font-thin">{course.date}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row md:grid grid-cols-2 pt-6 md:pt-12">
          <div>
            <h2 className="font-bold">
              {translations.about.about_section.about_title}
            </h2>

            <RichTextViewer
              content={translations.about.about_section.about_description}
            />
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </Wrapper>
  )
}
