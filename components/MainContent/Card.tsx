import sliceString from '@/utils/sliceString'
import React from 'react'

const Card = () => {
  const openInNewTab = (url?: string) => () => {
    window.open('https://github.com/bjc1102', '_blank')?.focus
  }

  return (
    <div
      onClick={openInNewTab()}
      className="max-w-[300px] hover:cursor-pointer border rounded-lg shadow-md bg-gray-800 border-gray-700"
    >
      <div className="p-10 w-full h-40 bg-[url('https://avatars.githubusercontent.com/u/71929440?v=4?s=400')] bg-no-repeat bg-center bg-cover">
        {/* eslint-disable-next-line @next/next/no-img-element */}
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-sm font-bold tracking-tight text-accentColor2">
          {sliceString('Noteworthy technology acquisitions 2021', 20)}
        </h5>
      </div>
    </div>
  )
}

export default Card
