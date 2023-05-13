import {SimpleLayout} from "../components/SimpleLayout"
import { Container } from '@/components/Container'
import { NextSeo } from 'next-seo';

const testimonials = [
    {
      body: "Ayant eu l'opportunité de travailler avec Nooman en temps que prestataire web, j'ai pu apprécier sa personnalité et son professionnalisme. Il est ainsi appréciable de collaborer avec Nooman pour son exigence, son leadership et sa grande capacité d'écoute. Nooman est ainsi un homme de solutions qui sait surmonter les difficultés et permettre aux projets d'avancer. Humainement, Nooman est quelqu'un de très appréciable pour son humour, sa bienveillance et sa générosité. Le projet qui pourra compter sur Nooman aura donc un atout majeur pour son développement !",
      author: {
        name: 'Jean Boyancé',
        handle: 'Marketing Manager',
      },
    },
    {
        body: "Les talents de Mr. Nooman MILED conjuguent la créativité, l'autonomie, l'endurance, l'esprit d'entreprise et un profond sens des responsabilités. Il déploie une énergie ciblée et considérable pour mener ses projets à bon port.",
        author: {
          name: 'Gérard Toko',
          handle: 'CEO Dataleon',
        },
      },
      {
        body: "J'ai eu la chance de travailler avec Nooman quelques années alors qu'il était mon client, et j'ai été très impressionnée par sa capacité à gérer les projets avec succès. Nooman a une forte expertise dans la planification, la coordination et la communication avec les parties prenantes. Il a travaillé en étroite collaboration avec moi et mon équipe sur le terrain pour s'assurer du bon déroulé des opérations. Son attention aux détails et sa capacité à résoudre rapidement les problèmes ont été particulièrement utiles pour maintenir le projet sur la bonne voie. En plus de ses compétences de gestion de projet, Nooman est une personne agréable et bienveillante avec qui chacun prend plaisir a travailler.",
        author: {
          name: 'Sabrina Zaidi',
          handle: 'Responsable commerciale Get-Com',
        },
      },
      {
        body: "J'ai eu la chance de travailler avec Nooman dans le cadre d'un démarrage stratégique pour le Groupe. Outre ses hautes compétences techniques en terme d'ingénierie et de méthodes , Nooman est avant tout quelqu'un doté de pragmatisme et de bon sens, le tout adossé a de fortes valeurs humaines dont l'engagement ainsi que l'empathie pour ne citer que les plus saillantes. J'aurais plaisir à pouvoir retravailler avec lui !",
        author: {
          name: 'Bruce du Gardin',
          handle: 'Directeur des opérations',
        },
      },
      {
        body: "Nooman est un professionel fiable, n'hésitant pas à prendre des initiatives dans une logique de performance et de satisfaction client. Durant notre période commune chez GXO, j'ai eu l'occasion de collaborer avec Nooman sur plusieurs projets structurants où j'ai pu apprécier son impact déterminant et sa très grande disponibilité afin d'identifier la meilleure solution possible pour chaque thématique. Nooman était d'ailleurs reconnu, que ce soit dans les équipes GXO ou clientes, comme un acteur clé capable d'interagir avec toutes les parties prenantes d'un projet.",
        author: {
          name: 'Adrien Dubois',
          handle: 'Contract Manager',
        },
      },
      {
        body: "j'ai eu le plaisir et la chance d'avoir travaillé avec Nooman lors de ma précédente expérience sur un projet d'envergure, Nooman développe des soft skills très avancées et des hard skills bien diversifiées qui (et heureusement) nous ont permis de solidifier l'assise de ce projet. humainement ; il faut le connaître pour ne pas passer à côté de quelque chose...Merci Nooman et au plaisir de croiser ton chemin 😉",
        author: {
          name: 'Tarik Aitnini',
          handle: 'Expert opérations',
        },
      },
      {
        body: "Je recommande vraiment Nooman pour tout poste de développeur fullstack. Il a une solide expérience en développement, et ses compétences techniques sont remarquables. En plus de ses compétences professionnelles, c' est également une personne agréable et facile à travailler, toujours disposé à aider les autres et à prendre des initiatives. Il serait un atout précieux pour toute équipe de développement.",
        author: {
          name: 'Julien Foucart',
          handle: 'CTO',
        },
      },
      {
        body: "Travailler avec Nooman fût un réel plaisir. De par sa capacité à résoudre et à comprendre les besoins et les problématiques de chacun, il saura répondre à vos attentes soyez-en sûr. Ses capacités et ses compétences font de lui quelqu'un d'incontournable dans son domaine. Je recommande à 100%!",
        author: {
          name: 'Luca Debionne',
          handle: 'Fullstack Developer',
        },
      },
      {
        body: "Homme de projet et de terrain, travailler avec Nooman est aussi formateur pour ses collègues que bénéfique pour les clients. Son expérience Logistique et transport, son esprit synthétique et sa capacité d’écoute sont remarquables. Des qualités professionnelles et humaines sont des atouts rares lorsqu’elles sont utilisées à bon escient. Nooman maîtrise cet art de la meilleure des façons. Bonne chance pour la suite ! Loic ",
        author: {
          name: 'Loïc Barret',
          handle: 'Consultant',
        },
      },
      {
        body: "Confiez lui votre projet, il saura le gérer d'une main de maitre",
        author: {
          name: 'Véronique Uhlrich',
          handle: 'Assistante ADV',
        },
      },

  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function testimonial() {
    return (
      <>      
      <NextSeo
      title="Recommandations"
      description="Ce qu'on dit de moi"
    />
        <SimpleLayout>
            
            <Container className="dark:border-gray-100 ">
      <div className="py-2 sm:py-2">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="max-w-xl mx-auto text-center">
  <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-zinc-100 animate-fade-up">
          {"Retours d'Expérience : Ce qu'on Dit de Moi"}
          </p>
        </div>
        <div className="flow-root max-w-2xl mx-auto mt-16 sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-1">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="p-8 text-sm leading-6 rounded-2xl bg-gray-50">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="flex items-center mt-6 gap-x-4">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Container>
      </SimpleLayout>
      </>
    )
  }
  