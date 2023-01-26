import React from 'react'
import DirectoryIcon from 'public/assets/DirectoryIcon'
import StarIcon from 'public/assets/StarIcon'
import { motion } from 'framer-motion'
import { CardMenuAnimation } from '@/utils/animation'

interface CardMenuBarProps {
  isMark: boolean
}

const CardMenuBar = ({ isMark }: CardMenuBarProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    e.stopPropagation()

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
          (isMark ? 'fill-yellow-300' : 'fill-white') +
          ' border-primaryColor1 shadow-sm hover:text-white hover:border-accentColor1 text-gray-400 bg-primaryColor1 hover:bg-primaryColor2 focus:ring-4 focus:outline-none focus:ring-gray-400'
        }
      >
        <StarIcon />
      </button>
    </motion.div>
  )
}

export default React.memo(CardMenuBar)
