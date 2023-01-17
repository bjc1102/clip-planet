import React from 'react'
import { NextPage } from 'next'
import HomeLayout from '@/components/Layout/HomeLayout'
import Header from '@/components/Layout/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HomeLayout />
    </>
  )
}

export default Home
