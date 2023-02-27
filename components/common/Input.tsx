import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className="block w-full p-3 pl-5 pr-20 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
    />
  )
}

export default Input
