import About from "./about"
import Head from 'next/head'
import { Container } from '@/components/Container'

export default function Home() {
  return (
    <>
      <Head>
        <title>Développeur Web et Mobile Freelance à Lyon - Nooman Miled</title>
        <meta
          name="description"
          content="Nooman Miled, développeur web et mobile freelance à Lyon, spécialisé en React, React Native, Node.js, Express et MongoDB."
        />
      </Head>
        <About/>
    </>
  )
}
