'use client'
import Link from 'next/link'

import { useTranslation } from '@/context'
import { Wrapper } from '@/components'

export default function Contact() {
  const { translations } = useTranslation()

  return (
    <Wrapper>
      <Link href="/">
        <h3 className="font-bold">{translations.projects.title}</h3>
      </Link>
    </Wrapper>
  )
}
