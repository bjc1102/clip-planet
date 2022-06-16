import { NextPage } from 'next'
import React from 'react'
import { useRecoilState } from 'recoil'
import { textState } from '../atoms/page'
import AddCard from '../components/AddCard'
import Card from '../components/Card'
import Nav from '../components/Nav'
import { name } from '../site.config'

//BEM 방식 ( block , element , model )

const Home: NextPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-10">
      <Nav />
      <section className="grid grid-cols-3 gap-3 md:grid-cols-1">
        <Card />
        <Card />
        <Card />
      </section>
      <AddCard />
    </main>
  )
}

export default Home
