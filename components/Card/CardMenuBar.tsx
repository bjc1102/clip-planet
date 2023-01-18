import React from 'react'
import Directory from 'public/assets/DirectoryIcon'
import Star from 'public/assets/StarIcon'
import { motion } from 'framer-motion'
import { CardMenuAnimation } from '@/utils/animation'

const CardMenuBar = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    e.stopPropagation()

  return (
    <motion.div {...CardMenuAnimation} className="flex gap-2">
      <button
        onClick={handleClick}
        className="flex justify-center p-1 items-center rounded-lg border border-primaryColor1 shadow-sm hover:text-white hover:border-accentColor1 text-gray-400 bg-primaryColor1 hover:bg-primaryColor2 focus:ring-4 focus:outline-none focus:ring-gray-400"
      >
        <Directory />
      </button>
      <button
        onClick={handleClick}
        className="flex justify-center p-1 items-center rounded-lg border border-primaryColor1 shadow-sm hover:text-white hover:border-accentColor1 text-gray-400 bg-primaryColor1 hover:bg-primaryColor2 focus:ring-4 focus:outline-none focus:ring-gray-400"
      >
        <Star />
      </button>
    </motion.div>
  )
}

export default React.memo(CardMenuBar)
