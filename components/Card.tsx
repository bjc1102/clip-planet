import React from 'react'
import Pencil from './assets/Pencil'
import Star from './assets/Star'
import ICard from '../types/Card'

const Card: React.FunctionComponent<ICard> = (props) => {
  const { title, content, url, date, isMark } = props
  return (
    <div className="mx-auto container">
      <div className="rounded">
        <div className="w-full h-72 flex flex-col justify-between bg-gray-800 border-gray-700 rounded-lg border  mb-6 py-5 px-4">
          <a target="_blank" href={url} rel="noreferrer">
            <div>
              <h3 className="text-gray-100 leading-7 font-semibold w-11/12">
                {title}
              </h3>
            </div>
            <div>
              <p className="text-sm break-words my-2">{content}</p>
              <p className="text-sm break-words my-2 text-gray-600">
                {url.length > 150 ? `${url.slice(0, 150)}...` : url}
              </p>
            </div>
          </a>
          <div>
            <div className="w-8 h-8" onClick={() => console.log(!isMark)}>
              <Star check={isMark} />
            </div>
            <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
              <p className="text-sm">{date}</p>
              <Pencil />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
