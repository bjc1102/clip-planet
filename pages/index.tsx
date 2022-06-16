import { NextPage } from 'next'
import React from 'react'
import { useRecoilState } from 'recoil'
import { textState } from '../atoms/page'
import AddCard from '../components/AddCardButton'
import Card from '../components/Card'
import Nav from '../components/Nav'
import { name } from '../site.config'

//BEM 방식 ( block , element , model )

const Home: NextPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-16">
      <Nav />
      <AddCard />
      <section className="grid grid-cols-3 gap-x-5 md:grid-cols-1 my-16">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  )
}

export default Home
