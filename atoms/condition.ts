import { nanoid } from 'nanoid'
import { atom } from 'recoil'

const defaultConditionState = {
  type: '',
  search: '',
}

interface IConditionState {
  type: string
  search: string
}

const conditionState = atom<IConditionState>({
  key: nanoid(), // unique ID (with respect to other atoms/selectors)
  default: defaultConditionState,
})

export { conditionState, defaultConditionState }
