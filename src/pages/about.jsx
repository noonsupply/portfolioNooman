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
          <Head>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <NextSeo
        title="Nooman Miled, Developpeur web et mobile freelance à Lyon"
        description="Apprenez-en plus sur moi, votre développeur web et mobile freelance de confiance. Découvrez mon parcours, mes compétences et comment je peux aider à transformer votre vision en une réalité digitale efficace."
        canonical="https://noomanmiled.com/"
        openGraph={{
          type: 'website',
          locale: 'fr_FR',
          url: 'https://noomanmiled.com/',
          site_name: 'Nooman Miled',
        }}
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
            Bienvenue !
            </h1>
            <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <p>
              {"Hello ! moi c'est Nooman, bienvenue sur mon site !"}<br></br>
              
              {"Besoin de créer une application web et/ou mobile sur mesure ? confiez-moi votre projet"}
              </p>
              <p>
              {"Particulièrement axé sur les outils de productivité, avec un sens aigue pour l'ux et l'ui, j'ai à coeur d'offrir une excellente expérience utilisateur"}
              </p>
              <p>
              {"J'ai eu la chance de travailler sur de nombreux projets stratégiques, ma vue d'ensemble et ma communication "}
              </p>
              <p>
                {"Ma gestion de projet efficace garantit que le travail est effectué dans les délais et dans les limites du budget. En bref, si vous cherchez un développeur qui est tout autant axé sur la qualité du produit que sur la satisfaction du client, vous êtes au bon endroit."}
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
