import React from 'react'
import Head from 'next/head'
import '@/styles/global.css'
import type { AppProps } from 'next/app'

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-primaryColor1">
        <Component {...pageProps} />
      </div>
    </>
  )
}
