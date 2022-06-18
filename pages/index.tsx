import { NextPage } from 'next'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { CardListState } from '../atoms/card'
import AddCardContainer from '../components/AddCardContainer'
import Card from '../components/Card'
import Nav from '../components/Nav'

//BEM 방식 ( block , element , model )

const Home: NextPage = () => {
  const cardList = useRecoilValue(CardListState)
  return (
    <main className="max-w-5xl mx-auto px-16">
      <Nav />
      <AddCardContainer />
      <section className="grid grid-cols-3 gap-x-5 md:grid-cols-1 my-16">
        {cardList.map((v) => {
          return <Card key={v.id} {...v} />
        })}
      </section>
    </main>
  )
}

export default Home
