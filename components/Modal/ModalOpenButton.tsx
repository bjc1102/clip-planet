import React from 'react'
import { useSetRecoilState } from 'recoil'
import { modalState } from '../../atoms/modal'
import PlusIcon from '../assets/Plus'

const ModalOpenButton: React.FC = () => {
  const setModal = useSetRecoilState(modalState)
  const toggle = () => setModal(true)

  return (
    <button
      onClick={toggle}
      className="rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
      type="button"
    >
      <PlusIcon />
    </button>
  )
}

export default ModalOpenButton
