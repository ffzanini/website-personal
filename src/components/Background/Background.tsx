'use client'
import { motion } from 'framer-motion'

export function Background() {
  return (
    <div className="relative pointer-events-none -z-10">
      <div className="fixed w-screen h-screen">
        <div className="container w-full h-full mx-auto flex px-0">
          {Array.from({ length: 0 }).map((_, index) => (
            <motion.div
              animate={{
                height: '100vh',
              }}
              transition={{
                duration: 1,
                delay: index * 0.5,
              }}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
