import React from 'react'
import Search from './Search'
import Title from './Title'

const Nav: React.FC = () => {
  return (
    <div className="container flex flex-col gap-5 my-5">
      <Title />
      <Search />
    </div>
  )
}

export default Nav
