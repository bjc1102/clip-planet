import Directory from 'public/assets/Directory'
import Star from 'public/assets/Star'
import React from 'react'
import MenuBarBtn from '@/components/MainContent/MenuBarBtn'

const CardMenuBar = () => {
  return (
    <div className="flex gap-2">
      <MenuBarBtn>
        <Directory />
      </MenuBarBtn>
      <MenuBarBtn>
        <Star />
      </MenuBarBtn>
    </div>
  )
}

export default CardMenuBar
