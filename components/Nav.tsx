import React from 'react'

const Nav: React.FC = () => {
  return (
    <nav className="fixed py-4 w-full border-solid border-b border-black">
      <div className="flex max-w-6xl mx-auto justify-between">
        <span>Bootingsi</span>
        <span>Login</span>
      </div>
    </nav>
  )
}

export default Nav
