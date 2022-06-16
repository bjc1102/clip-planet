import React from 'react'
import Pencil from './Pencil'
import Star from './Star'

const Card = () => (
  <a target="_blank" href="https://www.naver.com/" rel="noreferrer">
    <div className="mx-auto container py-6 px-0">
      <div className="rounded">
        <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
          <div>
            <h3 className="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">
              What does success as a UX designer look like and how to get there
              systematically
            </h3>
          </div>
          <div>
            <Star check={false} />
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

export default Card
