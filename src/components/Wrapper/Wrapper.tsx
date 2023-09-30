'use client'
import { motion, AnimatePresence } from 'framer-motion'

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence
      onExitComplete={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <motion.section
        className="container items-center justify-center pt-32 pb-14"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  )
}
