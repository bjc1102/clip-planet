import React from 'react'
import AddCard from '../CardForm'
import CloseIcon from '../assets/Clost'
import { useSetRecoilState } from 'recoil'
import { modalState } from '../../atoms/modal'

const AddCardModal: React.FC = () => {
  const setModal = useSetRecoilState(modalState)

  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full md:inset-0 h-modal bg-gray-900/90"
    >
      {/* header */}
      <div className="relative p-4 w-full max-w-2xl mx-auto h-full md:h-auto">
        <div className="relative rounded-lg shadow bg-gray-800 border ">
          <div className="flex justify-between items-start p-4 rounded-t border-b border-gray-600">
            <h3 className="text-xl font-semibold text-white">
              조건을 걸어줘야함
            </h3>
            <button
              onClick={() => setModal(false)}
              type="button"
              className="rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
            >
              <CloseIcon />
            </button>
          </div>
          {/* content */}
          <AddCard />
        </div>
      </div>
    </div>
  )
}

export default AddCardModal
