import React from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useTokenStore } from 'lib/store'

// 토큰을 클라이언트에서 검증하게 되니 에러가 발생한다
const Login = dynamic(() => import('@/components/Login'), {
  ssr: false,
})

const Home: NextPage = () => {
  const { token: isToken } = useTokenStore()

  return (
    <main className="max-w-5xl flex justify-center items-center min-h-screen mx-auto px-16">
      {!isToken && <Login />}
    </main>
  )
}

export default Home
