import React from 'react'
import Head from 'next/head'
import '@/styles/global.css'
import type { AppProps } from 'next/app'
import Nav from '@/components/Nav'
import useLogin from '@/hooks/useLogin'

export default function CustomApp({ Component, pageProps }: AppProps) {
  // token logic
  const isToken = useLogin()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen overflow-hidden">
        <Component {...pageProps} />
      </div>
    </>
  )
}
