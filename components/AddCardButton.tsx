import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SiteInput from './SiteInput'

const AddCardButton: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div>
      {isOpen && (
        <AnimatePresence>
          <motion.div
            key="InputBox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container flex flex-col gap-2"
          >
            <SiteInput />
          </motion.div>
        </AnimatePresence>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="theme-container p-2 hover:bg-slate-500 rounded-lg"
      >
        <span className="">{isOpen ? '닫기' : '추가'}</span>
      </button>
    </div>
  )
}

export default AddCardButton
