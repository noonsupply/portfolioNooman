import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { NextSeo } from 'next-seo';


import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="À propos de moi"
        description="Apprenez-en plus sur notre entreprise."
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
  src={portraitImage}
  alt="Nooman Miled, développeur freelance à Lyon"
  sizes="(min-width: 1024px) 32rem, 20rem"
  className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
/>
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Qui suis-je
            </h1>
            <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <p>
              {"Bonjour, je m'appelle Nooman Miled et je vis à Lyon."}<br></br>
              
              {"Après une expérience de 20 ans dans le secteur du transport et de la logistique dans des fonctions bureau d'étude et projet, j'ai décidé de me reconvertir dans le développement web et mobile."}
              </p>
              <p>
              {"J'ai tout quitté pour suivre ma passion et devenir développeur. Mes compétences en gestion de projet sont un atout pour gérer les délais, la qualité et les budgets. Je suis motivé pour relever de nouveaux défis et je suis convaincu que mon expérience passée et mes compétences techniques me permetteront de concrétiser vos projets."}
              </p>
              <p>
              {"Formé dans le bootcamp de La Capsule à Lyon, j'ai pu développer mes compétences tant sur la partie frontend que backend."}
              </p>
              <p>
              {"Depuis la validation de mon titre, j'ai continué à me former en développant quelques applications mobiles et web que vous pouvez d'ores et déjà voir dans la rubrique projet."}
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://github.com/noonsupply" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/nooman-miled" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto: contact@noomanmiled.com"
                icon={MailIcon}
                className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
              >
                contact@noomanmiled.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
