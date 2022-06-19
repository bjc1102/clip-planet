import React from 'react'

interface ITextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string
}

const Input: React.FC<ITextInputProps> = (props) => {
  const { name, type, placeholder, required, maxLength, onChange } = props
  return (
    <input
      className="theme-container rounded-lg py-2 px-4  outline-none"
      name={name}
      type={type}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  )
}

export default Input
