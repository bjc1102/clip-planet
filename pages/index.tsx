import React from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { isEmpty } from '@/utils/handleData'
import useRefreshToken from '@/hooks/useRefreshToken'
import instance from 'lib/axios'
import { LocalToken } from '@/types/Token'

// 토큰을 클라이언트에서 검증하게 되니 에러가 발생한다
const Login = dynamic(() => import('@/components/Login'), {
  ssr: false,
})

const Home: NextPage = () => {
  // token logic
  const refreshToken = useRefreshToken()
  const onClick = async () => {
    const localToken = JSON.parse(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      localStorage.getItem('refresh-token') ?? ''
    ) as LocalToken

    const token = await instance.post(
      'api/sites',
      {},
      {
        headers: {
          Authorization: `Bearer `,
        },
        timeout: 10000,
      }
    )
    console.log(token)
  }

  return (
    <main className="max-w-5xl flex justify-center items-center min-h-screen mx-auto px-16">
      {isEmpty(refreshToken) && <Login />}
      <button onClick={onClick}>버튼입니다</button>
    </main>
  )
}

export default Home
