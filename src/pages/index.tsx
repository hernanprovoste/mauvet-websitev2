import Head from 'next/head'
import { Inter } from 'next/font/google'
import {Layout} from "@/components/layout";
import { HeaderResponsive } from "@/components/navbar";
import {HeroBullets} from "@/components/jumbotron";
import { FeaturesCards } from '@/components/features';
import { FooterLinks } from '@/components/footer';
import { FeaturesGrid } from '@/components/doctors';

const inter = Inter({ subsets: ['latin'] })

const links = [
  { "link": "#", "label": "Reserva tu hora 😄" },
]

const data = [
  {
    "title": "Reserva tu hora",
    "links": [
      { "label": "Hazlo aqui", "link": "#" },
    ]
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Clinica Felina Mauvet</title>
        <meta name="description" content="Clinica Felina Mauvet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeaderResponsive links={links}  />
        <HeroBullets />
        <FeaturesCards />
        <FeaturesGrid />
        <FooterLinks data={data} />
      </Layout>
    </>
  )
}
