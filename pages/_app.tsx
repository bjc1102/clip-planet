import Head from 'next/head'
import '../styles/global.css'
import type { AppProps } from 'next/app'
import { socialImageTitle } from '../site.config'
import { RecoilRoot } from 'recoil'

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{socialImageTitle}</title>
      </Head>
      <RecoilRoot>
        <div className="min-h-screen overflow-hidden bg-bgColor text-white pt-10">
          <Component {...pageProps} />
        </div>
      </RecoilRoot>
    </>
  )
}
