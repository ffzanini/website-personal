'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function PricipalPage() {
  return (
    <motion.section className="flex flex-col items-center justify-center h-[calc(100vh-89px)]">
      <Link href="/about">
        clique aqui pra saber mais sobre a minha pessoas
      </Link>
    </motion.section>
  )
}
