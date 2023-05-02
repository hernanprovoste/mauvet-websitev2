import Head from 'next/head'
import { Inter } from 'next/font/google'
import {Layout} from "@/components/layout";
import { HeaderResponsive } from "@/components/navbar";
import {HeroBullets} from "@/components/jumbotron";
import { FeaturesCards } from '@/components/features';
import { FooterLinks } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

const links = [
  { "link": "/about", "label": "Features" },
  { "link": "/pricing", "label": "Pricing" },
  { "link": "/learn", "label": "Learn" },
  { "link": "/community", "label": "Community" }
]

const data = [
  {
    "title": "About",
    "links": [
      { "label": "Features", "link": "#" },
      { "label": "Pricing", "link": "#" },
      { "label": "Support", "link": "#" },
      { "label": "Forums", "link": "#" }
    ]
  },
  {
    "title": "Project",
    "links": [
      { "label": "Contribute", "link": "#" },
      { "label": "Media assets", "link": "#" },
      { "label": "Changelog", "link": "#" },
      { "label": "Releases", "link": "#" }
    ]
  },
  {
    "title": "Community",
    "links": [
      { "label": "Join Discord", "link": "#" },
      { "label": "Follow on Twitter", "link": "#" },
      { "label": "Email newsletter", "link": "#" },
      { "label": "GitHub discussions", "link": "#" }
    ]
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Veterinaria Mauvet</title>
        <meta name="description" content="Veterinaria Mauvet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeaderResponsive links={links}  />
        <HeroBullets />
        <FeaturesCards />
        <FooterLinks data={data} />
      </Layout>
    </>
  )
}
