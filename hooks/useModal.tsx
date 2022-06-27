import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/atoms'
import { defaultModalState } from '../atoms/atomsValue'

const useModal = () => {
  const [modal, setModal] = useRecoilState(modalState)
  const setModalToggle = (id?: string) => {
    if (id === undefined) setModal({ ...defaultModalState })
    else {
      setModal(() => ({
        id: id,
        state: true,
      }))
    }
  }

  return { modal, setModalToggle }
}

export default useModal
