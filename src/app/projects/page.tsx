'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Projects() {
  return (
    <motion.section className="container flex flex-col items-center justify-center h-[calc(100vh-89px)]">
      <Link href="/">voltar pra casa</Link>
    </motion.section>
  )
}
