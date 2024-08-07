'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { RiGithubLine } from 'react-icons/ri'

import { Project } from '@/app/data/projects'
import { Breadcrumb, RichTextViewer, ZoomImage, Wrapper } from '@/components'
import { useTranslation } from '@/context'

interface ProjectDetailsViewProps {
  project: Project
}

export default function ProjectDetailsView({
  project,
}: Readonly<ProjectDetailsViewProps>) {
  const { translations } = useTranslation()

  const projectTranslate = translations.projects.projects.find(
    (translate) => translate.id === project.id,
  )

  const backPath =
    project.type === 'Professional'
      ? '/projects/professional'
      : '/projects/study'

  const breadcrumb = [
    { label: translations.projects.title, link: '/projects' },
    {
      label:
        project.type === 'Professional'
          ? translations.projects.title_professional
          : translations.projects.title_study,
      link: backPath,
    },
    { label: projectTranslate?.title },
  ]
  return (
    <Wrapper>
      <div className="flex flex-col gap-2 p-4">
        <Breadcrumb path={breadcrumb} />
        <ZoomImage
          className="aspect-video w-full md:w-[70%] mx-auto rounded-3xl object-cover my-4"
          src={project.image}
          alt={projectTranslate?.title ?? 'project.id'}
          width={1200}
          height={800}
        />
        <h2 className="text-center font-bold mb-4">
          {projectTranslate?.title}
        </h2>
        <div className="flex flex-col 2xl:flex-row justify-between mb-4">
          <div className="flex flex-row items-center align-center gap-2">
            {project.active ? (
              <>
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <p>Online:</p>
                <Link
                  href={project.link}
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link}
                </Link>
              </>
            ) : (
              <>
                <motion.div className="w-3 h-3 bg-red-500 rounded-full" />
                <p>Offline</p>
              </>
            )}
          </div>
          {project.github && (
            <motion.div className="flex flex-row items-center align-center gap-2 div-github">
              <RiGithubLine className="icon-body" />
              <Link href={project.github} target="_blank">
                Projeto disponível no GitHub
              </Link>
            </motion.div>
          )}
        </div>
        {projectTranslate?.page_content.map((content, index) => (
          <div key={index}>
            <h3 className="pb-2 font-bold">{content.title}</h3>
            <div>
              {content.description.map((description, index) => (
                <div key={index} className="pb-4 2xl:pb-6">
                  <RichTextViewer content={description} />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col items-center align-center gap-2">
          <Link
            href={backPath}
            className="w-full 2xl:w-auto text-center rounded-full bg-black hover:bg-primary-color-800 border border-gray-200 
          dark:bg-white  dark:border-gray-600 dark:hover:bg-primary-color-300 dark:hover:border-gray-600"
          >
            <p className="text-white dark:text-black px-2 py-2 2xl:px-8 2xl:py-4">
              {translations.projects.back}
            </p>
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}
