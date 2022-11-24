import { NextPage } from 'next'
import React from 'react'
import dynamic from 'next/dynamic'
import setToken from '@/utils/setToken'
import { useTokenStore } from 'lib/store'
import { isEmpty } from '@/utils/handleData'

// 토큰을 클라이언트에서 검증하게 되니 에러가 발생한다
const Login = dynamic(() => import('@/components/Login'), {
  ssr: false,
})

const Home: NextPage = () => {
  // token logic
  React.useEffect(setToken)
  const isLogin = useTokenStore()

  return (
    <main className="max-w-5xl min-h-screen mx-auto px-16">
      {isEmpty(isLogin.refreshToken) && <Login />}
    </main>
  )
}

export default Home
