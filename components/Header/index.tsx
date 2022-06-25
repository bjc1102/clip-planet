import React from 'react'
import ButtonGroup from './ButtonGroup'
import Search from './Search'
import Title from './Title'

const Nav: React.FC = () => {
  return (
    <div className="container flex flex-col gap-5 my-5">
      <div className="flex">
        <Title />
      </div>
      <Search />
      <ButtonGroup />
    </div>
  )
}

export default Nav
