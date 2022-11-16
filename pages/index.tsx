import { NextPage } from 'next'
import React from 'react'
import Login from '@/components/Login'

//BEM 방식 ( block , element , model )

const Home: NextPage = () => {
  return (
    <main className="max-w-5xl min-h-screen mx-auto px-16">
      <Login />
    </main>
  )
}

export default Home
