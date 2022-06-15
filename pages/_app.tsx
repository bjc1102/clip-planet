import Head from 'next/head'
import '../styles/global.css'
import type { AppProps } from 'next/app'
import { socialImageTitle } from '../site.config'

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{socialImageTitle}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
