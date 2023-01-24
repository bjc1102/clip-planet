import { useQueryClient } from '@tanstack/react-query'
import { UserClipListKey } from 'constant/query.key'
import CloseIcon from 'public/assets/CloseIcon'
import LoadingIcon from 'public/assets/LoadingIcon'
import React from 'react'
import useDeleteClip from './queries/useDeleteClip'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

const ClipDeleteButton = (props: Props) => {
  const { mutate: deleteClip, isLoading } = useDeleteClip()
  const queryClient = useQueryClient()

  const handleClick = function (e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    queryClient.invalidateQueries(UserClipListKey)
  }

  return (
    <button
      className="p-1 rounded-full border border-primaryColor1 hover:text-gray-400 hover:border-accentColor1 text-white bg-primaryColor2 focus:outline-none"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? <LoadingIcon /> : <CloseIcon />}
    </button>
  )
}

export default ClipDeleteButton
