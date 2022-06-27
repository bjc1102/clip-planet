import { atom } from 'recoil'
import { localStorageEffect } from '../utils/localStorageEffect'
import { nanoid } from 'nanoid'

import { IConditionState, IModalState, ICategoryState } from './atomsType'

import ICard from '../types/Card'
import { defaultConditionState, defaultModalState, key } from './atomsValue'

export const CardListState = atom<ICard[]>({
  key: nanoid(), // unique ID (with respect to other atoms/selectors)
  default: [],
  effects: [localStorageEffect(key)],
})

export const modalState = atom<IModalState>({
  key: nanoid(), // unique ID (with respect to other atoms/selectors)
  default: defaultModalState,
})

export const conditionState = atom<IConditionState>({
  key: nanoid(), // unique ID (with respect to other atoms/selectors)
  default: defaultConditionState,
})

export const categoryState = atom<ICategoryState[]>({
  key: nanoid(),
  default: [],
})
