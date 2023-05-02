import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>MauVet</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>

    <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme: 'light'}}>
      <Component {...pageProps} />
    </MantineProvider>
    </>
  )
}
