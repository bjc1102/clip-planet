import { atom } from 'recoil'
import ICard from '../types/Card'

const CardListState = atom<ICard[]>({
  key: 'cardListState', // unique ID (with respect to other atoms/selectors)
  default: [],
})

export { CardListState }
