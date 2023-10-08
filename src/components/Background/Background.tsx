'use client'
import { motion } from 'framer-motion'

export function Background() {
  return (
    <div className="relative pointer-events-none -z-10">
      <div className="fixed w-screen h-screen">
        <div className="h-full mx-auto flex">
          {Array.from({ length: 13 }).map((_, index) => (
            <motion.div
              animate={{
                height: '100vh',
              }}
              transition={{
                duration: 1,
                delay: index * 0.4,
              }}
              key={index}
              className="bg-gray-300 dark:bg-gray-600 opacity-30 min-w-[1px] h-0 mr-[130px] lg:mr-[146px] block"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
