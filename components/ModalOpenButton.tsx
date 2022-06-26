import React from 'react'
import { useSetRecoilState } from 'recoil'
import { modalState } from '../atoms/atoms'
import PlusIcon from './assets/Plus'

const ModalOpenButton: React.FC = () => {
  const setModal = useSetRecoilState(modalState)
  const toggle = () => setModal({ id: '', state: true })

  return (
    <button
      onClick={toggle}
      className="fixed right-1/4 bottom-10 lg:right-6 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
      type="button"
    >
      <PlusIcon />
    </button>
  )
}

export default ModalOpenButton
