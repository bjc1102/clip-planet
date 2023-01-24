import React from 'react'

type buttonStyle = 'primary' | 'error' | 'default'

type buttonStyleType = {
  [key in buttonStyle]: string
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'style-type': buttonStyle
}

const Button = (props: ButtonProps) => {
  const buttonStyle: buttonStyleType = {
    primary:
      'border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center border-blue-500 text-blue-500 hover:text-white hover:bg-blue-600 focus:ring-blue-800',
    error:
      'border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900',
    default:
      'border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center border-gray-600 text-gray-400 hover:text-white hover:bg-gray-600 focus:ring-gray-800',
  }

  return (
    <button {...props} className={buttonStyle[props['style-type']]}>
      {props.children}
    </button>
  )
}

export default Button
