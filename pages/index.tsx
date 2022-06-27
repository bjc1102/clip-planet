import { NextPage } from 'next'
import React from 'react'
import { useRecoilValue } from 'recoil'

import { modalState, conditionState, CardListState } from '../atoms/atoms'

import AddCardModal from '../components/Modal'
import Card from '../components/Card'
import Nav from '../components/Header'
import ModalOpenButton from '../components/ModalOpenButton'

//BEM 방식 ( block , element , model )

const Home: NextPage = () => {
  const cardList = useRecoilValue(CardListState)
  const modal = useRecoilValue(modalState)
  const cond = useRecoilValue(conditionState)

  const FilterData = () => {
    if (cond.type === '키워드') {
      return cardList.map((v) => {
        return v.title.includes(cond.search) && <Card key={v.id} {...v} />
      })
    }
    if (cond.type === '즐겨찾기')
      return cardList.map((v) => {
        return v.isMark && <Card key={v.id} {...v} />
      })

    return cardList.map((v) => {
      return <Card key={v.id} {...v} />
    })
  }

  return (
    <main className="max-w-5xl mx-auto px-16">
      <Nav />
      {modal.state && <AddCardModal />}
      <section className="grid grid-cols-3 gap-x-5 md:grid-cols-1 my-16">
        {FilterData()}
      </section>
      <ModalOpenButton />
    </main>
  )
}

export default Home
