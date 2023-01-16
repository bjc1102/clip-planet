import React from 'react'
import Directory from 'public/assets/DirectoryIcon'
import Star from 'public/assets/StarIcon'
import MenuBarBtn from '@/components/MainContent/MenuBarBtn'
import { motion } from 'framer-motion'
import { CardMenuAnimation } from '@/utils/animation'

const CardMenuBar = () => {
  return (
    <motion.div {...CardMenuAnimation} className="flex gap-2">
      <MenuBarBtn>
        <Directory />
      </MenuBarBtn>
      <MenuBarBtn>
        <Star />
      </MenuBarBtn>
    </motion.div>
  )
}

export default React.memo(CardMenuBar)
