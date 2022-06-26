import { atom } from 'recoil'
import { localStorageEffect } from '../utils/localStorageEffect'
import { nanoid } from 'nanoid'

import { IModalState } from './atomsType'
import ICard from '../types/Card'
import { IConditionState } from './atomsType'

import { defaultConditionState } from './atomsValue'
import { defaultModalState } from './atomsValue'
import { key } from './atomsValue'

export const conditionState = atom<IConditionState>({
  key: nanoid(), // unique ID (with respect to other atoms/selectors)
  default: defaultConditionState,
})

export const CardListState = atom<ICard[]>({
  key: nanoid(), // unique ID (with respect to other atoms/selectors)
  default: [],
  effects: [localStorageEffect(key)],
})

export const modalState = atom<IModalState>({
  key: nanoid(), // unique ID (with respect to other atoms/selectors)
  default: defaultModalState,
})
