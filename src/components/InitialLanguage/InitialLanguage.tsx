'use client'
import { useEffect } from 'react'

import { useTranslation } from '@/context'
import { getBrowserLanguage } from '@/lib/utils'

export function SetInitialLanguage() {
  const { setLocation } = useTranslation()

  useEffect(() => {
    const initialLanguage = getBrowserLanguage()
    switch (initialLanguage) {
      case 'pt':
      case 'en':
        setLocation(initialLanguage)
        break
      default:
        setLocation('en')
    }
  }, [setLocation])

  return null
}
