'use client'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import Link from 'next/link'

import { useTranslation } from '@/context'
import { Wrapper } from '@/components'

import axios from 'axios'

export default function Contact() {
  const { translations } = useTranslation()
  console.log('process.env.NOTION_API_KEY', process.env.NOTION_API_KEY)
  console.log(
    'process.env.NOTION_DATABASE_KEY',
    process.env.NOTION_DATABASE_KEY,
  )

  return (
    <Wrapper>
      <motion.h2
        initial={{ y: 32 }}
        layout
        whileInView={{ y: 0, opacity: 1 }}
        // viewport={{ once: true, margin: '-150px 0px -150px 0px' }}
        className="opacity-0 mb-6"
      >
        Contact
      </motion.h2>
      <div className="flex gap-20 lg:gap-8 flex-col lg:flex-col">
        <ContactForm />
        <div className="text-justify lg:text-left">
          <h2 className="font-bold">
            {translations.about.about_contact.contact_title}
          </h2>
          <h3>
            {translations.about.about_contact.contact_description_one}
            <Link href="/contact" className="underline font-bold">
              {translations.about.about_contact.contact_link_one}
            </Link>
            {translations.about.about_contact.contact_description_two}
            <Link
              href="https://www.linkedin.com/in/ffzanini/"
              className="underline font-bold"
              target="_blank"
            >
              {translations.about.about_contact.contact_link_two}
            </Link>
            .
          </h3>
        </div>
      </div>
    </Wrapper>
  )
}

function ContactForm() {
  const { register, handleSubmit, formState, reset } = useForm<{
    name: string
    email: string
    message: string
  }>({
    reValidateMode: 'onChange',
  })

  const enableSubmit = formState.isDirty && formState.isValid

  const onSubmit = handleSubmit(({ name, email, message }) => {
    toast.promise(
      axios
        .post('api/message', {
          name,
          email,
          message,
        })
        .then(() => {
          reset()
        }),
      {
        loading: 'Sending message...',
        success: 'Message sent!',
        error: 'Message failed to send.',
      },
    )
  })

  return (
    <form className="flex-1 flex flex-col gap-11" onSubmit={onSubmit}>
      <input {...register('name', { required: true })} placeholder="Name" />
      <input
        {...register('email', {
          required: true,
          pattern: /\S+@\S+\.\S+/,
        })}
        placeholder="Email"
      />
      <textarea {...register('message')} placeholder="Message" />
      <button
        disabled={!enableSubmit}
        type="submit"
        className="disabled:grayscale disabled:cursor-not-allowed bg-primary-low-opacity rounded-lg p-5 hover:brightness-125 transition-all duration-500"
      >
        Submit
      </button>
    </form>
  )
}
