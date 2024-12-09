'use client'
import Link from 'next/link'
import { useTranslation } from '@/context'
import { Card, RichTextViewer, ScrollToTopButton, Wrapper } from '@/components'
import { motion } from 'framer-motion'
import { cardAnim } from '@/constants/animations'
import { animate } from '@/lib/utils'
import { projects } from '@/app/data/projects'

export default function Contact() {
  const { translations } = useTranslation()
  const projectsSliceProfessional = projects
    .filter((project) => project.type === 'Professional')
    .slice(0, 3)

  const projectsSliceStudy = projects
    .filter((project) => project.type === 'Study')
    .slice(0, 3)

  return (
    <Wrapper>
      <div className="flex flex-col gap-2 p-4">
        <h1 className="font-bold">{translations.projects.title}</h1>
        <p>{translations.projects.sub_title}</p>
        <h2 className="pb-2">{translations.projects.sub_title_professional}</h2>
        <div className="grid grid-col-1 md:grid-cols-3 gap-10 gap-y-16">
          {projectsSliceProfessional.map((project) => (
            <motion.div
              {...animate({
                variants: cardAnim,
              })}
              layout
              key={project.id}
              className="group col-span-1 flex flex-col"
            >
              <Card project={project} />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col 2xl:flex-row justify-center 2xl:justify-center gap-4 2xl:gap-12 p-6 items-center">
          <Link
            href="/projects/professional"
            className="w-full 2xl:w-auto text-center rounded-full bg-black hover:bg-primary-color-800 border border-gray-200 
          dark:bg-white  dark:border-gray-600 dark:hover:bg-primary-color-300 dark:hover:border-gray-600"
          >
            <p className="text-white dark:text-black px-2 py-2 2xl:px-8 2xl:py-4">
              {translations.projects.button_text_professional}
            </p>
          </Link>
        </div>
        <h2 className="pb-2">{translations.projects.sub_title_study}</h2>
        <div className="grid grid-col-1 md:grid-cols-3 gap-10 gap-y-16">
          {projectsSliceStudy.map((project) => (
            <motion.div
              {...animate({
                variants: cardAnim,
              })}
              layout
              key={project.id}
              className="group col-span-1 flex flex-col"
            >
              <Card project={project} />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col 2xl:flex-row justify-center 2xl:justify-center gap-4 2xl:gap-12 p-6 items-center">
          <Link
            href="/projects/study"
            className="w-full 2xl:w-auto text-center rounded-full bg-black hover:bg-primary-color-800 border border-gray-200 
          dark:bg-white  dark:border-gray-600 dark:hover:bg-primary-color-300 dark:hover:border-gray-600"
          >
            <p className="text-white dark:text-black px-2 py-2 2xl:px-8 2xl:py-4">
              {translations.projects.button_text_study}
            </p>
          </Link>
        </div>
        <div className="flex flex-col pt-6 gap-8">
          <div className="text-left">
            <h3 className="font-bold">{translations.stack.footer.title}</h3>
            <p className="inline-block">
              <RichTextViewer
                content={translations.stack.footer.message_one}
                typeText="span"
              />
              <Link href="/resume" className="underline font-bold">
                {translations.stack.footer.link}
              </Link>
              {translations.stack.footer.message_two}
            </p>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </Wrapper>
  )
}
