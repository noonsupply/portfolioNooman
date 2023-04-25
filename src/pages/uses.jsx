import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Mes outils - Nooman Miled</title>
        <meta
          name="description"
          content="Logiciels et applications que j'utilise au quotidien."
        />
      </Head>
      <SimpleLayout
        title="Logiciels et applications que j'utilise au quotidien."
        intro="Vous trouverez ci-dessous la liste du matériel et logiciels que j'utilise"
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” MacBook Pro, M1 Pro, 16GB RAM (2022)">
            {"Pour développer mes applications, j'utilise un MacBook Pro 14 pouces de 2022. Ce MacBook Pro est équipé d'un processeur rapide et d'une mémoire vive suffisante pour gérer les tâches de développement exigeantes. Il est également équipé d'un écran Retina de haute résolution pour une meilleure qualité d'affichage. Le Macbook Pro de 2022 est également doté de la dernière version de macOS qui offre une expérience utilisateur fluide et des outils de développement intégrés pour faciliter le développement de mes applications. En utilisant un MacBook Pro, je peux bénéficier d'une puissance de calcul élevée et d'une interface utilisateur intuitive pour une productivité maximale."}
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
            {"En tant que développeur web et mobile, j'utilise Visual Studio Code comme éditeur de code principal. Il offre une interface intuitive et une grande variété d'extensions pour améliorer mon workflow de développement. Il est également très personnalisable, ce qui me permet de l'adapter à mes besoins spécifiques. Il est compatible avec de nombreux langages de programmation, notamment HTML, CSS, JavaScript et Python. De plus, il intègre des outils de débogage et de test qui me facilitent la vie lorsque je développe des applications. En somme, Visual Studio Code est un outil incontournable pour moi, qui me permet de travailler efficacement et de produire des résultats de qualité."}
            </Tool>
            <Tool title="Expo & NextJs">
            {"Je travaille actuellement avec les technologies Expo et Next.js pour développer des applications web et mobiles modernes et performantes. Expo me permet de tirer parti des fonctionnalités natives de différents appareils tout en utilisant une seule base de code, tandis que Next.js offre une puissance de rendu côté serveur et des fonctionnalités de développement avancées pour une expérience utilisateur fluide."}
            </Tool>
            <Tool title="MongoDB & Mongoose">
            {"Pour le backend de mes applications, j'utilise MongoDB en combinaison avec Mongoose. MongoDB est une base de données NoSQL qui utilise le format de données BSON, similaire à JSON. Mongoose est un ODM (Object Document Mapper) qui permet de modéliser les données de MongoDB en utilisant des schémas et des méthodes similaires à ceux d'une base de données relationnelle. En utilisant MongoDB et Mongoose ensemble, je peux tirer parti des avantages de MongoDB tout en bénéficiant d'une interface de programmation familière pour l'accès et la manipulation de mes données."}
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
            {"Pour la conception de l'interface utilisateur de mes applications, j'utilise Figma. Figma est une plateforme de conception en ligne qui permet de créer et de collaborer sur des maquettes, des wireframes et des designs d'interfaces utilisateur en temps réel. Il est possible de partager les designs avec d'autres membres de l'équipe et de laisser des commentaires directement sur les designs pour faciliter la communication et la collaboration. Figma est un outil puissant et intuitif qui me permet de créer des designs professionnels pour mon application sans avoir besoin d'installer de logiciels de bureau."}
            </Tool>
            <Tool title="Tailwind">
            {"J'utilise le framework de style CSS Tailwind utilisé pour construire des interfaces utilisateur rapides et efficaces. Il offre une variété de classes prédéfinies qui peuvent être utilisées pour créer des mises en page, des boutons, des formulaires, etc. en quelques lignes de code, plutôt que de devoir écrire des styles CSS personnalisés. Il permet également de faciliter l'intégration de l'accessibilité et de l'expérience utilisateur en incluant des classes pour les états tels que : hover, focus, active, etc. Il est également très configurable et peut être personnalisé pour répondre aux besoins spécifiques d'un projet. En somme, l'utilisation de Tailwind CSS permet de gagner du temps et de faciliter la mise en place d'un design cohérent et fonctionnel."}
            </Tool>
          </ToolsSection>
          
        </div>
      </SimpleLayout>
    </>
  )
}
