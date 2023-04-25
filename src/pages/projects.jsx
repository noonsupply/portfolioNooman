import Image from 'next/image'
import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import Contags from '@/images/projets/Contags.jpeg'
import Flavorites from '@/images/projets/Flavorites.jpeg'
import Hackatweet from '@/images/projets/Hackatweet.jpeg'
import Portfolio from '@/images/projets/Portfolio.jpeg'
import Link from 'next/link'
import clsx from 'clsx'
import {
  GitHubIcon,
} from '@/components/SocialIcons'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function Projects() {

  const mesProjets = [
    {
      name: 'Hackatweet',
      role: "#web Création d'une version light de Twitter",
      imageUrl: Hackatweet,
      bio: 'Technologies : React avec NextJS, Node, Mongoose',
      gitLink: "https://github.com/noonsupply",
    },
  
    {
      name: 'Contags',
      role: "#mobile Application de gestion des contacts",
      imageUrl: Contags,
      bio: 'Technologies : React Native avec Expo, Node, Mongoose',
      gitLink: "https://github.com/noonsupply/contags-frontend",
    },
    {
      name: 'Flavorites',
      role: "#web Application de gestion des favoris",
      imageUrl: Flavorites ,
      bio: 'Technologies : React Native avec Expo, Node, Mongoose',
      gitLink: "https://github.com/noonsupply/flavorites-frontend2",
    },
    {
      name: 'Portfolio',
      role: "#web Site portfolio sur lequel vous êtes 😅",
      imageUrl: Portfolio ,
      bio: 'Technologies : React avec NextJS, TailwindUI',
      gitLink: "https://github.com/noonsupply/flavorites-frontend2",
    },
    
  ]

  return (
    <>
      <Head>
        <title>Projets - Nooman Miled</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Quelques projets réalisés"
        intro="J'ai eu la chance de travailler sur de nombreux projets durant ma carrière, retrouvez ci-dessous quelques exemples d'application web ou mobile."
      >
        <div >
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24 text-zinc-600 dark:text-zinc-200 dark: border-gray-100">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Mes Projets</h2>
            <p className="text-xl text-white-500">
              {"Voici quelques projets d'applications web & mobile réalisés"}
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
            >
              {mesProjets.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <Image className="rounded-lg object-cover shadow-lg object-cover h-48 w-96"  src={person.imageUrl} alt="" />
                    </div>
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{person.name}</h3>
                      <p className="text-teal-600">{person.role}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-white-500">{person.bio}</p>
                    </div>
                    <h1>
                  <SocialLink target="_blank" href={person.gitLink} icon={GitHubIcon} className="mt-4">
                Découvrez sur GitHub
              </SocialLink>
              </h1>
                  </div>
                  
                </li>
              ))}
            </ul>
            
          </div>
        </div>
      </div>
    </div>

      </SimpleLayout>
    </>
  )
}
