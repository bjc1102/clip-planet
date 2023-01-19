import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = (props: InputProps) => {
  return (
    <>
      <label htmlFor="input" className="sr-only">
        {props.label}
      </label>
      <input
        {...props}
        className="block w-full p-2 text-sm bg-primaryColor1 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
      />
    </>
  )
}

export default Input
