import { atom } from 'recoil'
import { localStorageEffect } from '../utils/localStorageEffect'

import ICard from '../types/Card'
import IForm from '../types/Form'

const defaultFormValue: IForm = {
  title: '',
  content: '',
  url: '',
}

const CardListState = atom<ICard[]>({
  key: 'cardListState', // unique ID (with respect to other atoms/selectors)
  default: [],
  effects: [localStorageEffect('current_cardList')],
})

export { CardListState, defaultFormValue }
