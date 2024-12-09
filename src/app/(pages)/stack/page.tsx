'use client'
import { useTranslation } from '@/context'
import { RichTextViewer, ScrollToTopButton, Wrapper } from '@/components'
import {
  stackBackEnd,
  stackDevOps,
  stackFrontEnd,
  stackGameDevelopment,
} from '@/constants/stack'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Stack() {
  const { translations } = useTranslation()

  return (
    <Wrapper>
      <div className="flex flex-col gap-2 p-4">
        <h1 className="font-bold">{translations.stack.title}</h1>
        <RichTextViewer content={translations.stack.sub_title} />
        <h3 className="font-bold">{translations.stack.front}</h3>
        <motion.div className="grid grid-cols-2 gap-4 2xl:grid 2xl:grid-cols-4">
          {stackFrontEnd.map(({ icon: Icon, name }) => (
            <motion.a
              aria-label={name}
              target="_blank"
              key={name}
              className="py-8 px-18 gap-2 flex flex-col text-base font-extralight justify-center items-center border border-current"
            >
              <Icon className="icon-stack" />
              {name}
            </motion.a>
          ))}
        </motion.div>
        <h3 className="font-bold pt-4">{translations.stack.back}</h3>
        <motion.div className="grid grid-cols-2 gap-4 2xl:grid 2xl:grid-cols-4">
          {stackBackEnd.map(({ icon: Icon, name }) => (
            <motion.a
              aria-label={name}
              target="_blank"
              key={name}
              className="py-8 px-18 gap-2 flex flex-col text-base font-extralight justify-center items-center border border-current"
            >
              <Icon className="icon-stack" />
              {name}
            </motion.a>
          ))}
        </motion.div>
        <h3 className="font-bold pt-4">{translations.stack.game}</h3>
        <motion.div className="grid grid-cols-2 gap-4 2xl:grid 2xl:grid-cols-4">
          {stackGameDevelopment.map(({ icon: Icon, name }) => (
            <motion.a
              aria-label={name}
              target="_blank"
              key={name}
              className="py-8 px-18 gap-2 flex flex-col text-base font-extralight justify-center items-center border border-current"
            >
              <Icon className="icon-stack" />
              {name}
            </motion.a>
          ))}
        </motion.div>
        <h3 className="font-bold pt-4">{translations.stack.devops}</h3>
        <motion.div className="grid grid-cols-2 gap-4 2xl:grid 2xl:grid-cols-4">
          {stackDevOps.map(({ icon: Icon, name }) => (
            <motion.a
              aria-label={name}
              target="_blank"
              key={name}
              className="py-8 px-18 gap-2 flex flex-col text-base font-extralight justify-center items-center border border-current"
            >
              <Icon className="icon-stack" />
              {name}
            </motion.a>
          ))}
        </motion.div>
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
