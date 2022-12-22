import React from 'react'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  content: string
}

const SelectButton: React.FC<ButtonProps> = ({ content, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <div className="inline-flex items-center">
        <span>{content}</span>
      </div>
    </button>
  )
}

export default SelectButton
