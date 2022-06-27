import React from 'react'
import { useRecoilState } from 'recoil'
import _ from 'lodash'

import Pencil from './assets/Pencil'
import Star from './assets/Star'
import ICard from '../types/Card'
import { CardListState } from '../atoms/atoms'
import { getSliceCardData } from '../utils/handleData'
import CloseIcon from './assets/CloseIcon'
import useModal from '../hooks/useModal'

const Card: React.FunctionComponent<ICard> = (props) => {
  const { id, title, content, url, date, isMark } = props

  const [cardList, setCardList] = useRecoilState(CardListState)
  const { setModalToggle } = useModal()

  const handlePencilIcon = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    setModalToggle(id)
  }
  const handleStarIcon = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    const index = _.findIndex(cardList, {
      id: id,
    })
    setCardList(() => {
      return [
        ...getSliceCardData({
          cardList,
          index,
          value: {
            ...cardList[index],
            isMark: !isMark,
          },
        }),
      ]
    })
  }
  const handleCloseIcon = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (confirm('삭제하시겠습니까?')) {
      const index = _.findIndex(cardList, {
        id: id,
      })
      setCardList(() => {
        return [...cardList.slice(0, index), ...cardList.slice(index + 1)]
      })
    }
  }
  return (
    <a target="_blank" href={url} rel="noreferrer">
      <div className="mx-auto container">
        <div className="rounded">
          <div className="w-full h-72 flex flex-col justify-between bg-gray-800 border-gray-700 rounded-lg border  mb-6 py-5 px-4">
            <div className="flex justify-between">
              <h3 className="text-gray-100 leading-7 font-semibold w-11/12">
                {title}
              </h3>
              <div
                onClick={handleCloseIcon}
                className="rounded-lg text-sm p-1 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
              >
                <CloseIcon />
              </div>
            </div>
            <div>
              <p className="text-sm break-words my-2">{content}</p>
              <p className="text-sm break-words my-2 text-gray-600">
                {url.length > 150 ? `${url.slice(0, 150)}...` : url}
              </p>
            </div>
            <div>
              <div
                className="w-7 h-7 mb-2 rounded-full bg-gray-100 text-gray-800 flexCenter hover:cursor-pointer"
                onClick={handleStarIcon}
              >
                <Star isMark={isMark} />
              </div>
              <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
                <p className="text-sm">{date}</p>
                <div
                  className="p-1 rounded-full text-gray-700 bg-gray-100 cursor-pointer hover:bg-gray-600 hover:text-white"
                  onClick={handlePencilIcon}
                >
                  <Pencil />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default React.memo(Card)
