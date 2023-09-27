'use client'
import { HeartIcon } from '@radix-ui/react-icons'
import { useTranslation } from '@/context'

export function Footer() {
  const { translations } = useTranslation()
  const yearNow = new Date().getFullYear()

  return (
    <div>
      {translations.footer.made} <HeartIcon /> {translations.footer.by}.{' '}
      <b>{translations.footer.reserved}</b> {yearNow}
    </div>
  )
}
