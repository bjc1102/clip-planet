import GoogleIcon from 'public/assets/GoogleIcon'
import React from 'react'

const Nav: React.FC = () => {
  return (
    <nav className="fixed py-4 w-full border-solid border-b border-black">
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
