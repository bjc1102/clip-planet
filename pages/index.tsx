import React from 'react'
import { NextPage } from 'next'
import MainContent from '@/components/MainContent'
import Header from '@/components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className={`min-h-screen max-w-7xl mx-auto px-5`}>
        <MainContent />
      </main>
    </>
  )
}

export default Home
