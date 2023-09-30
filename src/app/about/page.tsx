'use client'
import { ScrollToTopButton, Wrapper } from '@/components'
import Image from 'next/image'

export default function About() {
  return (
    <Wrapper>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-bold">About</h1>
        <h3 className="font-medium">Know me a little more</h3>
        <div className="lg:grid grid-cols-2 flex flex-col gap-4">
          <div className="flex justify-center">
            <h3>
              Hello! My name is Felipe Frantz Zanini, a Frontend Developer &
              Tech Lead, passionate about technology, music, art, jiu jitsu and
              reading. Im 30 years old, based in Balneário Camboriú, Santa
              Catarina. I started in the development world in 2008 in technical
              education. I fell in love with this life after my first algorithm
              class. I started effectively as a programmer in 2010, when I got
              my first job out of high school. Since then, 12 years have been
              dedicated to creating solutions and serving as a bridge between
              people and technology. I currently work as a frontend developer at
              Nave.rs creating digital products, custom web solutions for the
              best customer experience, helping companies organize and scale
              their products. See my resume here. Since I started working, I
              have participated in the development of several applications for
              the most diverse sectors and in reference companies such as: Banco
              ABC, UFC, SBT, Grupo SEB, Rede AZ, research groups, among others.
            </h3>
          </div>
          <div className="flex justify-center">
            <Image src="/images/user-eu.jpeg" alt="eu" width={420} height={0} />
          </div>
        </div>
        <div className="lg:grid grid-cols-3 flex flex-col">
          <div className="flex flex-col justify-start">
            <h1 className="font-bold">Carrer</h1>
            <h2>Nav9.tech</h2>
            <h3>Tech Lead</h3>
            <p>Nov 2021 - Present</p>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-bold">Education</h1>
            <h2>Uni. Fed. de Pelotas - UFPel</h2>
            <h3>Mestrado em Ciência da Computação</h3>
            <p>Mar 2019 - Ago 2021 unfinished</p>
          </div>
          <div className="flex flex-col justify-end">
            <h1 className="font-bold">Courses</h1>
            <h2>Harvard University</h2>
            <h3>CS50s Web Programming with JavaScript</h3>
            <p>Jun 2022 - Set 2022</p>
          </div>
        </div>
        <div className="grid grid-cols-2 pt-6 md:pt-12">
          <div>
            <h2 className="font-bold">About this website</h2>
            <h3 className="width-2">
              This website was developed using Next.js as a framework, deployed
              with Vercel, styled using Tailwind, and with icons powered by the
              library Radix UI. All text is set in the MavenPro typeface.
            </h3>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </Wrapper>
  )
}
