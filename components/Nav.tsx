import React from 'react'

const Nav: React.FC = () => {
  return (
    <nav className="py-8 w-full">
      <div className="flex max-w-5xl mx-auto justify-between items-center">
        <span>Logo</span>
        <span className="hover:bg-slate-200 rounded-full p-1">
          Notification
        </span>
      </div>
    </nav>
  )
}

export default Nav
