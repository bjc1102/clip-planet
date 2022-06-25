import React from 'react'

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string
  index: number
  length: number
}

const Button: React.FC<IButtonProps> = (props) => {
  const { title, index, length, onClick } = props
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        index === 0 ? 'rounded-l-lg' : length - 1 === index && 'rounded-r-lg'
      } inline-flex items-center py-2 px-4 text-sm font-medium focus:z-10 focus:ring-2 bg-gray-700   border-gray-600   text-white   hover:text-white   hover:bg-gray-600   focus:ring-blue-500   focus:text-white`}
    >
      {title}
    </button>
  )
}

export default Button
