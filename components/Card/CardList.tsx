import React from 'react'
import Card from '@/components/Card/Card'
import { useQuery } from 'react-query'
import { clipAPI } from 'lib/axios/instance'

const CardList = () => {
  const { data } = useQuery(['user-clips'], () => clipAPI.getClips())

  console.log(data)

  return (
    <section className="grid grid-cols-4 lg:grid-cols-1 gap-4 place-items-center">
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  )
}

export default CardList
