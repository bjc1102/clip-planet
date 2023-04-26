import useModal from '@/hooks/useModal'
import isErrorType from '@/types/error'
import { errorToast, successToast } from '@/utils/toast'
import { useQueryClient } from '@tanstack/react-query'
import { UserClipListKey } from 'constant/query.key'
import CloseIcon from 'public/assets/CloseIcon'
import LoadingIcon from 'public/assets/LoadingIcon'
import React from 'react'
import ConfirmModal from '../common/ConfirmModal'
import useDeleteClip from './queries/useDeleteClip'

interface ClipDeleteButtonProps {
  id: number
}

const ClipDeleteButton = ({ id }: ClipDeleteButtonProps) => {
  const { isModalOpen, handleModalClose, handleModalOpen } = useModal()
  const { mutate: deleteClip, isLoading } = useDeleteClip(id)
  const queryClient = useQueryClient()

  const handleDeleteButtonClick = function (
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    e.stopPropagation()
    handleModalOpen()
  }

  const handleDeleteClip = function () {
    deleteClip(id, {
      onSuccess() {
        queryClient.invalidateQueries(UserClipListKey)
        successToast('클립이 삭제되었습니다!')
      },
      onError(error) {
        if (isErrorType(error)) errorToast(error.message)
      },
    })
  }

  return (
    <>
      <button
        className="p-1 rounded-full border border-primaryColor1 hover:text-gray-400 hover:border-accentColor1 text-white bg-primaryColor2 focus:outline-none"
        onClick={handleDeleteButtonClick}
        disabled={isLoading}
      >
        {isLoading ? <LoadingIcon /> : <CloseIcon />}
      </button>
      {isModalOpen && (
        <ConfirmModal
          content="정말로 삭제하시겠습니까?"
          closeCallback={handleModalClose}
          submitCallback={handleDeleteClip}
          submitButtonStyle="error"
          negativeButtonStyle="default"
        />
      )}
    </>
  )
}

export default ClipDeleteButton
