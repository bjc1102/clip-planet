import { NextPage } from 'next'
import React from 'react'
import Login from '@/components/Login'
import { getCookies } from 'cookies-next'

//BEM 방식 ( block , element , model )

const Home: NextPage = () => {
  const { 'access-token': token, 'refresh-token': refreshToken } = getCookies()
  const [accessToken, setToken] = React.useState(token)

  const accessLogin = () => setToken(refreshToken)

  React.useEffect(accessLogin)

  return (
    <main className="max-w-5xl min-h-screen mx-auto px-16">
      {!accessToken && <Login />}
    </main>
  )
}

export default Home
