import React from 'react'
import Directory from 'public/assets/Directory'
import Star from 'public/assets/Star'
import MenuBarBtn from '@/components/MainContent/MenuBarBtn'
import { motion } from 'framer-motion'

const CardMenuBar = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="flex gap-2"
    >
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
