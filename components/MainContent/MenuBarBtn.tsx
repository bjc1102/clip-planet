import React from 'react'

const MenuBarBtn = ({ children }: { children: React.ReactNode }) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex justify-center p-1 items-center rounded-lg border border-primaryColor1 shadow-sm hover:text-white hover:border-accentColor1 text-gray-400 bg-primaryColor1 hover:bg-primaryColor2 focus:ring-4 focus:outline-none focus:ring-gray-400;"
    >
      {children}
    </button>
  )
}

export default MenuBarBtn
