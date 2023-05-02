import Head from 'next/head'
import { Inter } from 'next/font/google'
import {Layout} from "@/components/layout";
import {Header_Navbar} from "@/components/navbar";
import {Jumbotron} from "@/components/jumbotron";
import {Services} from "@/components/services";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Mauvet Veterinaria</title>
        <meta name="description" content="Veterinaria Mauvet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header_Navbar />
        <Jumbotron />
        <Services />
      </Layout>
    </>
  )
}
