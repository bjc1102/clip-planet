import React from 'react'
import CardList from '@/components/Card/ClipCardList'
import ClipListTab from '../Card/ClipListTab'
import withAuth from '@/hooks/Auth/withAuth'
import LoginLayout from './LoginLayout'

const HomeLayout = () => {
  return (
    <main className="min-h-screen max-w-7xl mx-auto pb-10">
      <ClipListTab />
      <CardList />
    </main>
  )
}

export default withAuth(HomeLayout, LoginLayout)
