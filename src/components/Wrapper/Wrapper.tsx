'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { cn, animate } from '@/lib/utils'
import { contentAnim } from '@/constants/animations'

export function Wrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname()

  return (
    <AnimatePresence
      onExitComplete={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <motion.section
        className={cn(
          `${pathname === '/' ? '2xl:pt-40 pt-16' : '2xl:pt-24 pt-16'} container grow`,
        )}
        {...animate({
          variants: contentAnim,
        })}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  )
}
