import React from 'react'
import ITextInputProps from '../types/Input'

const Input: React.FC<ITextInputProps> = (props) => {
  const { name, value, type, placeholder, required, maxLength, onChange } =
    props
  return (
    <input
      className="theme-container rounded-lg py-2 px-4  outline-none"
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  )
}

export default Input
