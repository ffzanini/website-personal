'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PricipalPage() {
  return (
    <motion.section className="container flex flex-col items-center justify-center h-[calc(100vh-88px)]">
      <Link href="/">voltar pra casa</Link>
    </motion.section>
  )
}
