import React from 'react'

interface ITextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string
}

const Input: React.FC<ITextInputProps> = (props) => {
  const { name, type, maxLength, onChange } = props
  return (
    <input
      className="theme-container rounded-lg py-2 px-4  outline-none"
      name={name}
      type={type}
      maxLength={maxLength}
      onChange={onChange}
    />
  )
}

export default Input
