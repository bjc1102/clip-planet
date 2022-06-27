import { SetterOrUpdater } from 'recoil'

export interface IModalState {
  state: boolean
  id: string
}

export interface IConditionState {
  type: string
  search: string
}

export interface ICategoryState {
  title: string
  onClick: <T>(value: string, callback: SetterOrUpdater<T>) => void
}
