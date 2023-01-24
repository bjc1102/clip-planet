import React from 'react'
import AlertIcon from 'public/assets/AlertIcon'
import CloseIcon from 'public/assets/CloseIcon'
import { createPortal } from 'react-dom'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { ButtonMouseEvent } from '@/types/utils'
import Button from './Button'

interface ConfirmModalProps {
  content: string
  submitCallback: () => void
  closeCallback: () => void
}

const ConfirmModal = ({
  content,
  submitCallback,
  closeCallback,
}: ConfirmModalProps) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const handleCloseButton = function (e: ButtonMouseEvent) {
    e.stopPropagation()
    closeCallback()
  }

  const handleSubmit = function (e: ButtonMouseEvent) {
    e.stopPropagation()
    submitCallback()
    closeCallback()
  }

  const handlePropagation = function (e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation()
  }

  useOutsideClick(ref, closeCallback)

  return createPortal(
    <div
      onClick={handlePropagation}
      className="fixed bg-black bg-opacity-60 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 md:h-full md:w-full"
    >
      <div
        ref={ref}
        className="relative mx-auto border border-solid border-gray-200 rounded-lg w-full h-full max-w-md md:h-auto"
      >
        <div className="relative bg-white rounded-lg shadows">
          <button
            type="button"
            onClick={handleCloseButton}
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center justify-center"
          >
            <CloseIcon />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center [&>*]:fill-red-500">
            <AlertIcon />
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              {content}
            </h3>
            <div className="flex gap-2 justify-center">
              <Button style-type="error" onClick={handleSubmit} type="button">
                확인
              </Button>
              <Button
                style-type="default"
                onClick={handleCloseButton}
                type="button"
              >
                취소
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default ConfirmModal
