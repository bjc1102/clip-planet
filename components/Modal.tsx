import React from 'react'
import CardForm from './CardForm'
import CloseIcon from './assets/CloseIcon'
import useModal from '../hooks/useModal'

const AddCardModal: React.FC = () => {
  const { modal, setModalToggle } = useModal()
  const toggle = () => setModalToggle()
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
              {modal.id.length ? '수정' : '추가'}
            </h3>
            <button
              onClick={toggle}
              type="button"
              className="rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
            >
              <CloseIcon />
            </button>
          </div>
          {/* content */}
          <CardForm />
        </div>
      </div>
    </div>
  )
}

export default AddCardModal
