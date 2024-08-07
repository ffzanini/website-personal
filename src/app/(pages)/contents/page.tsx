'use client'
import Link from 'next/link'
import Image from 'next/image'

import { useTranslation } from '@/context'
import { RichTextViewer, ScrollToTopButton, Wrapper } from '@/components'

export default function Contact() {
  const { translations } = useTranslation()

  return (
    <Wrapper>
      <div className="flex flex-col gap-2 p-4">
        <h1 className="font-bold">{translations.contents.title}</h1>
        <h3 className="font-bold">{translations.contents.sub_title}</h3>
        <div className="2xl:grid grid-cols-2 flex flex-col gap-4 pb-4 pt-4 2xl:pt-8 2xl:pb-12">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">{translations.contents.youtube.title}</h2>
            <RichTextViewer
              content={translations.contents.youtube.description}
            />
          </div>
          <div className="flex flex-col gap-4 text-center">Video</div>
        </div>
        <div className="flex flex-col gap-4 pb-4 pt-4 2xl:pt-8 2xl:pb-12">
          <h2 className="font-bold">{translations.contents.pixelart.title}</h2>
          <RichTextViewer
            content={translations.contents.pixelart.description}
          />
          <div className="2xl:grid grid-cols-5 flex flex-col gap-4 pb-6 pt-8 hidden 2xl:block">
            <Image
              src=""
              className="rounded"
              alt="pixel1"
              width={128}
              height={128}
            />
            <Image
              src=""
              className="rounded"
              alt="pixel2"
              width={128}
              height={128}
            />
            <Image
              src=""
              className="rounded"
              alt="pixel3"
              width={128}
              height={128}
            />
            <Image
              src=""
              className="rounded"
              alt="pixel4"
              width={128}
              height={128}
            />
            <Image
              src=""
              className="rounded"
              alt="pixel5"
              width={128}
              height={128}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 pb-4 pt-4 2xl:pt-8 2xl:pb-12">
          <h2 className="font-bold">
            {translations.contents.game_development.title}
          </h2>
          <RichTextViewer
            content={translations.contents.game_development.description}
          />

          {translations.contents.game_development.games.map((game) => (
            <div
              className="flex flex-col-reverse 2xl:flex-row justify-between gap-8 pb-4 pt-4 2xl:pt-8 2xl:pb-12 alter-section"
              key={game.id}
            >
              <div className="w-full">
                <h2 className="font-bold pb-4">{game.title}</h2>
                <h3 className="pb-4">{game.description}</h3>
                <Link
                  className="underline font-bold"
                  href={game.link}
                  target="_blank"
                >
                  link {game.title}
                </Link>
              </div>
              <div className="w-full">
                <Image
                  src={game.image}
                  className="rounded"
                  alt={game.title}
                  width={600}
                  height={200}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTopButton />
    </Wrapper>
  )
}
