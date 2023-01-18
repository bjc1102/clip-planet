import React from 'react'
import CardList from '@/components/Card/ClipCardList'
import ClipCardListTab from '../Card/ClipCardListTab'

const HomeLayout = () => {
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-5">
      <ClipCardListTab />
      <CardList />
    </main>
  )
}

export default HomeLayout
