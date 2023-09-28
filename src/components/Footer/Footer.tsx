'use client'
import { HeartIcon } from '@radix-ui/react-icons'
import { useTranslation } from '@/context'
import { socials } from '@/constants'

export function Footer() {
  const { translations } = useTranslation()
  const yearNow = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 flex sm:flex-col lg:flex-row justify-between">
      <div className="px-6 pt-6">
        <div className="container lg:mb-6 flex justify-center">
          <h3 className="flex flex-row gap-1 items-center">
            {translations.footer.made} <HeartIcon width={16} height={16} />
            {translations.footer.by}.
            <b>
              {yearNow} {translations.footer.reserved}
            </b>
          </h3>
        </div>
      </div>
      <div className="px-6 pt-6">
        <div className="container mb-6 flex justify-center">
          <div className="flex flex-row gap-4 items-center">
            {socials.map(({ href, icon: Icon, name }) => (
              <a
                aria-label={name}
                target="_blank"
                key={href}
                href={href}
                className="bg-primary-low-opacity rounded-full aspect-square p-2 flex justify-center items-center hover:brightness-125 transition-all duration-300"
              >
                <Icon width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
