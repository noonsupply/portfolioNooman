import Image from 'next/image'
import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import Contags from '@/images/projets/Contags.png'
import Flavorites from '@/images/projets/Flavorites.png'
import Hackatweet from '@/images/projets/Hackatweet.jpeg'
import Portfolio from '@/images/projets/Portfolio.jpeg'
import Link from 'next/link'
import clsx from 'clsx'
import {
  GitHubIcon,
} from '@/components/SocialIcons'
import ProjectDetail from '../components/ProjectDetail'
import { Container } from '../components/Container'
import { TypeAnimation } from 'react-type-animation';
import { NextSeo } from 'next-seo';

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
    <NextSeo
      title="Projets"
      description="Mes réalisations"
    />
      <Head>
        <title>Projets - Nooman Miled</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title={
          <TypeAnimation sequence={[
            'Quelques projets réalisés', // Types 'One'
            1000,
            'Des projets web et mobiles', // Types 'One'
            1000, // Waits 1s // Types 'Three' without deleting 'Two'
            () => {
              console.log('Sequence completed'); // Place optional callbacks anywhere in the array
            }
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '1em', display: 'inline-block' }}>
          </TypeAnimation>
        }
      >
        <h3 className='dark:text-zinc-100'>{"J'ai eu la chance de travailler sur de nombreux projets durant ma carrière, retrouvez ci-dessous quelques exemples d'application web ou mobile."}</h3>
                <Container>
        <ProjectDetail/>
        </Container>
        <div >

    </div>

      </SimpleLayout>
    </>
  )
}
