import React from 'react'
import Card from '@/components/MainContent/Card'

const CardList = () => {
  return (
    <section className="grid grid-cols-4 lg:grid-cols-1 gap-4 py-96">
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  )
}

export default CardList
