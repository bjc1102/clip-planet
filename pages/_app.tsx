import React from 'react'
import Head from 'next/head'
import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import useLogin from '@/hooks/useLogin'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

export default function CustomApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  )
  const isToken = useLogin()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-primaryColor1">
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={true} />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </QueryClientProvider>
      </div>
    </>
  )
}
