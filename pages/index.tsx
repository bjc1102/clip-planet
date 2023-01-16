import React from 'react'
import { NextPage } from 'next'
import MainContent from '@/components/MainContent'
import Header from '@/components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainContent />
    </>
  )
}

export default Home
