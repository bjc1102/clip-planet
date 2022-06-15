import React from 'react'
import { name } from '../site.config'

//BEM 방식 ( block , element , model )

const index = () => {
  return (
    <main className="min-h-screen overflow-hidden">
      <h1 className="text-3xl font-bold underline text-gray-500">
        Hello world!
      </h1>
    </main>
  )
}

export default index
