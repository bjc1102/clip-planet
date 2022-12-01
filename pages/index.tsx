import React from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useTokenStore } from 'lib/store'
import Nav from '@/components/Nav'
import PlusButton from '@/components/PlusButton'

// 토큰을 클라이언트에서 검증하게 되니 에러가 발생한다
const Login = dynamic(() => import('@/components/Login'), {
  ssr: false,
})

const Home: NextPage = () => {
  const { token: isToken } = useTokenStore()

  return (
    <main className="max-w-6xl min-h-screen mx-auto px-16">
      <Nav />
      {!isToken && <Login />}
      <PlusButton />
    </main>
  )
}

export default Home
