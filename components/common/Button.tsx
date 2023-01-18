import React from 'react'

const Button = ({ children }: { children: React.ReactNode }) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
  }
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
