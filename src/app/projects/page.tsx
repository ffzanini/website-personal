'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useTranslation } from '@/context'
import { RichTextViewer, ScrollToTopButton, Wrapper } from '@/components'

export default function Contact() {
  const { translations, location } = useTranslation()

  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(3)

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
    const records =
      translations.projects.projects.slice(
        indexOfFirstRecord,
        indexOfLastRecord,
      ) || []

    setCurrentRecords(records)
    setCurrentPage(1)

    window.scrollTo({
      top: 0,
    })
  }, [location])

  return (
    <Wrapper>
      <div className="flex flex-col gap-2 p-4">
        <h1 className="font-bold">{translations.projects.title}</h1>
        <h3 className="font-bold">{translations.projects.sub_title}</h3>
        <div className="flex flex-col gap-4 pb-4 pt-4 lg:pt-8 lg:pb-12">
          {currentRecords.map((project) => (
            <div
              className="flex flex-col lg:flex-row justify-between gap-4 pb-4 pt-4 lg:pt-8 lg:pb-12 alter-section"
              key={project.id}
            >
              <div className="text-justify w-full">
                <h2 className="font-bold">{project.title}</h2>
                <h3>
                  {project.develop_at_text}
                  <Link
                    className="underline font-bold"
                    href={project.develop_at_site}
                    target="_blank"
                  >
                    {project.develop_at}
                  </Link>
                </h3>
                <RichTextViewer content={project.description} />
                <Link
                  className="underline font-bold"
                  href={project.link}
                  target="_blank"
                >
                  {project.develop_at_button}
                </Link>
              </div>
              <div className="text-justify w-full">
                <Image
                  src={project.image}
                  className="rounded"
                  alt={project.title}
                  width={600}
                  height={200}
                />
              </div>
            </div>
          ))}
          {currentPage !== nPages && (
            <div className="flex flex-col md:flex-row justify-center md:justify-center gap-4 p-8">
              <button
                onClick={showMore}
                className="px-2 py-2 md:px-4 md:py-4 bg-white text-center border border-gray-200 focus:outline-none hover:bg-primary-light rounded-full dark:bg-gray-900 dark:border-gray-600 dark:hover:bg-primary-dark dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                <h3>{translations.home.textButtonAbout}</h3>
              </button>
            </div>
          )}
        </div>
      </div>
      <ScrollToTopButton />
    </Wrapper>
  )
}
