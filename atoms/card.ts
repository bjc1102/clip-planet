import { atom } from 'recoil'
import { localStorageEffect } from '../utils/localStorageEffect'

import ICard from '../types/Card'
import IForm from '../types/Form'
import { nanoid } from 'nanoid'

const defaultFormValue: IForm = {
  title: '',
  content: '',
  url: '',
}
export const key = 'current_cardList'

// const handleStorageNull = () => {
//   return !LocalStorage.getItem(key) ? [] : JSON.parse(LocalStorage.getItem(key))
// }

const CardListState = atom<ICard[]>({
  key: nanoid(), // unique ID (with respect to other atoms/selectors)
  default: [],
  effects: [localStorageEffect(key)],
})

export { CardListState, defaultFormValue }
