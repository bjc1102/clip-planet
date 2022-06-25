import React from 'react'

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string
  index: number
  length: number
  nowType: string
}

const CategoryButton: React.FC<IButtonProps> = (props) => {
  const { title, index, length, onClick, nowType } = props
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        index === 0 ? 'rounded-l-lg' : length - 1 === index && 'rounded-r-lg'
      } ${
        nowType !== title ? 'text-white bg-gray-700' : 'text-accent bg-gray-800'
      } inline-flex items-center py-2 px-4 text-sm font-medium focus:z-10 focus:ring-2   border-gray-600  hover:text-white   hover:bg-gray-600   focus:ring-blue-500   focus:text-white`}
    >
      {title}
    </button>
  )
}

export default CategoryButton
