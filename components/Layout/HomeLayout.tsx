import React from 'react'
import CardList from '@/components/Card/ClipCardList'
import ClipListTab from '../Card/ClipListTab'

const HomeLayout = () => {
  return (
    <main className="min-h-screen max-w-7xl mx-auto py-10">
      <ClipListTab />
      <CardList />
    </main>
  )
}

export default HomeLayout
