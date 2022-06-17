import React from 'react'
import Pencil from './Pencil'
import Star from './Star'
import { MockCardData } from '../Mock/MockCardData'

const Card = () => {
  return (
    <div className="mx-auto container">
      <div className="rounded">
        <div className="w-full h-72 flex flex-col justify-between bg-gray-800 border-gray-700 rounded-lg border  mb-6 py-5 px-4">
          <a target="_blank" href={MockCardData.url} rel="noreferrer">
            <div>
              <h3 className="text-gray-100 leading-7 font-semibold w-11/12">
                {MockCardData.title}
              </h3>
            </div>
            <div>
              <p className="text-sm break-words my-2">{MockCardData.content}</p>
              <p className="text-sm break-words my-2 text-gray-600">
                {MockCardData.url.length > 150
                  ? `${MockCardData.url.slice(0, 150)}...`
                  : MockCardData.url}
              </p>
            </div>
          </a>
          <div>
            <div onClick={() => console.log(!MockCardData.isMark)}>
              <Star check={MockCardData.isMark} />
            </div>
            <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
              <p className="text-sm">{MockCardData.date}</p>
              <Pencil />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
