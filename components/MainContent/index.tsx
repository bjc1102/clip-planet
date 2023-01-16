import React from 'react'
import CardList from '@/components/Card/CardList'

const MainContent = () => {
  return (
    <main className={`min-h-screen max-w-7xl mx-auto px-5`}>
      <div className="w-full">
        <CardList />
      </div>
    </main>
  )
}

export default MainContent
