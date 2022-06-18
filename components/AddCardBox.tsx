import React from 'react'
import { motion } from 'framer-motion'
import AddCard from './CardForm'

const AddCardBox: React.FC = () => {
  return (
    <div>
      <motion.div
        key="InputBox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container flex flex-col gap-2"
      >
        <AddCard />
      </motion.div>
    </div>
  )
}

export default AddCardBox
