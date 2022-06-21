import { nanoid } from 'nanoid'
import _, { values } from 'lodash'

import { getNowDate } from './getDate'

import ICard from '../types/Card'
import IForm from '../types/Form'

interface ISliceCardData {
  cardList: ICard[]
  index: number
  value?: any
}

export const getCardData = (props: IForm): ICard => {
  return {
    id: nanoid(),
    ...props,
    date: getNowDate(),
    isMark: false,
  }
}

export const getSliceCardData = ({
  cardList,
  index,
  value,
}: ISliceCardData): ICard[] => {
  return [
    ...cardList.slice(0, index),
    value && {
      ...value,
    },
    ...cardList.slice(index + 1),
  ]
}
