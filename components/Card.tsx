import React from 'react'
import Pencil from './Pencil'
import Star from './Star'

const Card = () => {
  const [bookMark, setBookMark] = React.useState(false)

  return (
    <a target="_blank" href="https://www.naver.com/" rel="noreferrer">
      <div className="mx-auto container">
        <div className="rounded">
          <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 dark:border-gray-700 rounded-lg border  mb-6 py-5 px-4">
            <div>
              <h3 className="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">
                사이트명
              </h3>
            </div>
            <div>
              <Star check={bookMark} />
              <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
                <p className="text-sm">March 28, 2020</p>
                <Pencil />
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Card
