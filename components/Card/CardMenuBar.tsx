import React from 'react'
import DirectoryIcon from 'public/assets/DirectoryIcon'
import StarIcon from 'public/assets/StarIcon'
import { motion } from 'framer-motion'
import { CardMenuAnimation } from '@/utils/animation'
import useUpdateFavoriteClip from './queries/useUpdateFavoriteClip'
import { errorToast } from '@/utils/toast'
import isErrorType from '@/types/error'
import { useQueryClient } from '@tanstack/react-query'
import { UserClipListKey } from 'constant/query.key'

interface CardMenuBarProps {
  id: number
  isFavorite: boolean
}

const CardMenuBar = ({ id, isFavorite }: CardMenuBarProps) => {
  const queryClient = useQueryClient()
  const { mutate: updateFavoriteClip } = useUpdateFavoriteClip(id)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    updateFavoriteClip(id, {
      onSuccess() {
        queryClient.invalidateQueries(UserClipListKey)
      },
      onError(error) {
        if (isErrorType(error)) errorToast(error.message)
      },
    })
  }

  return (
    <motion.div {...CardMenuAnimation} className="flex gap-2">
      <button
        onClick={handleClick}
        className="flex justify-center p-1 items-center rounded-lg border border-primaryColor1 shadow-sm hover:text-white hover:border-accentColor1 text-gray-400 bg-primaryColor1 hover:bg-primaryColor2 focus:ring-4 focus:outline-none focus:ring-gray-400"
      >
        <DirectoryIcon />
      </button>
      <button
        onClick={handleClick}
        className={
          'flex justify-center p-1 items-center rounded-lg border ' +
          (isFavorite
            ? '[&>*]:fill-yellow-300 stroke-2 stroke-yellow-300'
            : 'fill-inherit stroke-2 stroke-white') +
          ' border-primaryColor1 shadow-sm hover:text-white hover:border-accentColor1 text-gray-400 bg-primaryColor1 hover:bg-primaryColor2 focus:ring-4 focus:outline-none focus:ring-gray-400'
        }
      >
        <StarIcon />
      </button>
    </motion.div>
  )
}

export default React.memo(CardMenuBar)
