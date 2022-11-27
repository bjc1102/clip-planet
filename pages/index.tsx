import React from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { isEmpty } from '@/utils/handleData'
import useRefreshToken from '@/hooks/useRefreshToken'

// 토큰을 클라이언트에서 검증하게 되니 에러가 발생한다
const Login = dynamic(() => import('@/components/Login'), {
  ssr: false,
})

const Home: NextPage = () => {
  // token logic
  const refreshToken = useRefreshToken()

  return (
    <main className="max-w-5xl min-h-screen mx-auto px-16">
      {isEmpty(refreshToken) && <Login />}
    </main>
  )
}

export default Home
