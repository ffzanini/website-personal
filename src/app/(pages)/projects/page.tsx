'use client'
import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useTranslation } from '@/context'
import { ScrollToTopButton, Wrapper } from '@/components'

export default function Contact() {
  const { translations, location } = useTranslation()

  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = useMemo(() => 3, [])

  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfLastRecordNextPage = (currentPage + 1) * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const indexOfFirstRecordNextPage = indexOfLastRecordNextPage - recordsPerPage

  const records =
    translations.projects.projects.slice(
      indexOfFirstRecord,
      indexOfLastRecord,
    ) || []
  const recordsNextPage = translations.projects.projects.slice(
    indexOfFirstRecordNextPage,
    indexOfLastRecordNextPage,
  )

  const [currentRecords, setCurrentRecords] = useState(records)
  const nPages = Math.ceil(
    translations.projects.projects.length / recordsPerPage,
  )

  const showMore = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1)
    }
    setCurrentRecords(currentRecords.concat(recordsNextPage))
  }

  useEffect(() => {
    const records = translations.projects.projects.slice(0, 3) || []

    setCurrentRecords(records)
    setCurrentPage(1)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [location, translations.projects.projects])

  return (
    <Wrapper>
      <div className="flex flex-col gap-2 p-4">
        <h1 className="font-bold">{translations.projects.title}</h1>
        <p>{translations.projects.sub_title}</p>
        <div className="flex flex-col gap-4">
          {currentRecords.map((project) => (
            <div
              className="flex flex-col-reverse lg:flex-row justify-between gap-8 pb-4 pt-8 lg:pb-8 lg:pt-12 alter-section"
              key={project.id}
            >
              <div className="w-full md:w-2/5">
                <h3 className="font-bold pb-2">{project.title}</h3>
                <p className="pb-2 md:pb-4">
                  {project.develop_at_text}
                  <Link
                    className="underline font-bold"
                    href={project.develop_at_site}
                    target="_blank"
                  >
                    {project.develop_at}
                  </Link>
                </p>
                <p className="pb-4">{project.description}</p>
                <div className="flex flex-row flex-wrap pb-4 gap-2">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="text-sm font-medium mr-2 px-2.5 py-0.5 
                      bg-primary-color-300 text-opacity-color-white-theme-text 
                      border border-primary-color-800 rounded-full 
                      dark:text-opacity-color-dark-theme-text dark:border-primary-color-300 dark:bg-primary-color-800"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <Link
                  className="underline font-bold"
                  href={project.link}
                  target="_blank"
                >
                  {project.develop_at_button}
                </Link>
              </div>
              <div className="w-full md:w-3/5">
                <Image
                  src={project.image}
                  className="rounded border border-gray-900 dark:border-gray-50"
                  alt={project.title}
                  width={1200}
                  height={600}
                />
              </div>
            </div>
          ))}
          {currentPage !== nPages ? (
            <div className="flex flex-col md:flex-row justify-center md:justify-center gap-4 p-8">
              <button
                onClick={showMore}
                className="text-center rounded-full bg-gray-50 hover:bg-primary-color-300 border border-gray-200 
                dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-primary-color-800 dark:hover:border-gray-600"
              >
                <p className="px-2 py-2 md:px-8 md:py-4">
                  {translations.projects.button_text}
                </p>
              </button>
            </div>
          ) : (
            <p className="flex flex-row justify-center text-center align-center gap-4 p-8">
              {translations.projects.end_list}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
            </p>
          )}
        </div>
      </div>
      <ScrollToTopButton />
    </Wrapper>
  )
}
