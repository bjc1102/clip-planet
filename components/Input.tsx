import React from 'react'
import ITextInputProps from '../types/Input'

const Input: React.FC<ITextInputProps> = (props) => {
  return (
    <input
      className="theme-container rounded-lg py-2 px-4  outline-none"
      {...props}
    />
  )
}

export default Input
