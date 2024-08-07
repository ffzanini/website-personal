'use client'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/context'
import { Breadcrumb, Card, ScrollToTopButton, Wrapper } from '@/components'
import { cardAnim } from '@/constants/animations'
import { animate } from '@/lib/utils'
import { projects } from '@/app/data/projects'

export default function ProjectsStudy() {
  const { translations } = useTranslation()

  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = useMemo(() => 12, [])

  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfLastRecordNextPage = (currentPage + 1) * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const indexOfFirstRecordNextPage = indexOfLastRecordNextPage - recordsPerPage

  const records = projects.slice(indexOfFirstRecord, indexOfLastRecord) || []
  const recordsNextPage = projects.slice(
    indexOfFirstRecordNextPage,
    indexOfLastRecordNextPage,
  )

  const [currentRecords, setCurrentRecords] = useState(records)
  const nPages = Math.ceil(projects.length / recordsPerPage)

  const showMore = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1)
    }
    setCurrentRecords(currentRecords.concat(recordsNextPage))
  }

  const breadcrumb = [
    { label: translations.projects.title, link: '/projects' },
    { label: translations.projects.title_professional },
  ]

  return (
    <Wrapper>
      <div className="flex flex-col gap-2 p-4">
        <Breadcrumb path={breadcrumb} />
        <h1 className="font-bold">
          {translations.projects.title_professional}
        </h1>
        <p className="pb-4">{translations.projects.description_professional}</p>
        <div className="grid grid-col-1 md:grid-cols-3 gap-10 gap-y-16">
          {currentRecords
            .filter((project) => project.type === 'Professional')
            .map((project) => (
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
        {currentPage !== nPages ? (
          <div className="flex flex-col 2xl:flex-row justify-center 2xl:justify-center gap-4 p-8">
            <button
              onClick={showMore}
              className="text-center rounded-full bg-black hover:bg-primary-color-800 border border-gray-200 
          dark:bg-white  dark:border-gray-600 dark:hover:bg-primary-color-300 dark:hover:border-gray-600"
            >
              <p className="text-white dark:text-black px-2 py-2 2xl:px-8 2xl:py-4">
                {translations.projects.button_text_professional}
              </p>
            </button>
          </div>
        ) : (
          <p className="flex flex-col 2xl:flex-row items-center justify-center text-center align-center gap-2 pt-6">
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
      <ScrollToTopButton />
    </Wrapper>
  )
}
