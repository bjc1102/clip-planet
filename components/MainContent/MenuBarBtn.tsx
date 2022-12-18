import React from 'react'

const MenuBarBtn = ({ children }: { children: React.ReactNode }) => {
  return (
    <button type="button" className="CardMenu-Btn">
      {children}
    </button>
  )
}

export default MenuBarBtn
