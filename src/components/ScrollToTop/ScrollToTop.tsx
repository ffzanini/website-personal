'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpIcon } from '@radix-ui/react-icons'

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    })
  }, [])

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <motion.button
      className="fixed bottom-6 md:bottom-24 right-4 p-2 bg-primary-light-low-opacity dark:primary-dark-low-opacity rounded-full"
      whileHover={{ scale: 1.1 }}
      style={{ display: isVisible ? 'block' : 'none' }}
      onClick={goTop}
    >
      <ArrowUpIcon width={24} height={24} />
    </motion.button>
  )
}
