import React from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Sidebar from '@/components/Sidebar'
import useLogin from '@/hooks/useLogin'
import MainContent from '@/components/MainContent'

// 토큰을 클라이언트에서 검증하게 되니 에러가 발생한다
const Login = dynamic(() => import('@/components/Login'), {
  ssr: false,
})

const Home: NextPage = () => {
  const isToken = useLogin()

  return (
    <>
      <Sidebar />
      <main className={`min-h-screen ml-[240px] px-5`}>
        {!isToken && <Login />}
        <MainContent />
      </main>
    </>
  )
}

export default Home
