import { atom } from 'recoil'

export const defaultModalState = {
  id: '',
  state: false,
}

interface IModalState {
  state: boolean
  id?: string
}

const modalState = atom<IModalState>({
  key: 'modalState', // unique ID (with respect to other atoms/selectors)
  default: defaultModalState,
})

export { modalState }
