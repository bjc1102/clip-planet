import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'style-type': 'primary'
  size: 'small'
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className="w-24 text-white bg-primaryColor2 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-4 py-1.5 rounded-sm"
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button
