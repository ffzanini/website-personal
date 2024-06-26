'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { animate } from '@/lib/utils'
import { contentAnim } from '@/constants/animations'

export function Wrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AnimatePresence
      onExitComplete={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <motion.section
        className="container min-h-[calc(100vh-14.20rem)] items-center justify-center pt-24 md:pt-36 overflow-hidden"
        {...animate({
          variants: contentAnim,
        })}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  )
}
