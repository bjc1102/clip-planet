import React from 'react'
import Directory from 'public/assets/DirectoryIcon'
import Star from 'public/assets/StarIcon'
import CardMenuButton from '@/components/common/CardMenuButton'
import { motion } from 'framer-motion'
import { CardMenuAnimation } from '@/utils/animation'

const CardMenuBar = () => {
  return (
    <motion.div {...CardMenuAnimation} className="flex gap-2">
      <CardMenuButton>
        <Directory />
      </CardMenuButton>
      <CardMenuButton>
        <Star />
      </CardMenuButton>
    </motion.div>
  )
}

export default React.memo(CardMenuBar)
