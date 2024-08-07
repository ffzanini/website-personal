'use client'
import Image from 'next/image'
import Link from 'next/link'

import { Project } from '@/app/data/projects'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/context'
import { useEffect } from 'react'

interface CardProps {
  project: Project
}

export function Card({ project }: Readonly<CardProps>) {
  const { translations, location } = useTranslation()
  const projectTranslate = translations.projects.projects.find(
    (translate) => translate.id === project.id,
  )

  const Container = ({ children }: { children: React.ReactNode }) => {
    if (project.navigation) {
      return (
        <Link
          href={`/projects/${project.navigation}`}
          className="flex flex-col group h-full"
        >
          {children}
        </Link>
      )
    }

    return <div className="flex flex-col group cursor-pointer">{children}</div>
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [location])

  return (
    <Container>
      <div className=" rounded-xl overflow-hidden ring-1 ring-gray-100 dark:ring-gray-800 group-hover:ring-primary-color-800 dark:group-hover:ring-primary-color-300 cursor-pointer transition-all flex-1">
        <div className="aspect-video overflow-hidden border-b border-gray-100 dark:border-gray-800">
          <Image
            className="aspect-video w-full object-cover group-hover:scale-125 transition-transform duration-700"
            width={500}
            height={500}
            src={project.image}
            alt={String(projectTranslate?.title)}
          />
        </div>
        <div className="p-4 gap-4 flex flex-col items-start">
          <h4 className="line-clamp-3 w-full">{projectTranslate?.title}</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies
              ? project.technologies.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      'text-xs font-medium px-1.5 py-0.2 bg-primary-color-300 text-opacity-color-white-theme-text border border-primary-color-800 rounded-full dark:text-opacity-color-dark-theme-text dark:border-primary-color-300 dark:bg-primary-color-800',
                    )}
                  >
                    {tag}
                  </span>
                ))
              : null}
          </div>
        </div>
      </div>
    </Container>
  )
}
