'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {
  return (
    <motion.section
      className="container flex flex-col items-center justify-center h-[calc(100vh-89px)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Link href="/">voltar pra casa</Link>
    </motion.section>
  )
}
