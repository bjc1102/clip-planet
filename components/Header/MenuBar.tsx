import React from 'react'
import { useTokenStore } from 'lib/store'
import BookIcon from 'public/assets/BookIcon'

const MenuBar = () => {
  return (
    <div className="flex justify-center items-center lg:order-2 max-md:hidden">
      <a
        href="#"
        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-800"
      >
        시작하기
      </a>
      <button
        data-collapse-toggle="mobile-menu-2"
        type="button"
        className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <BookIcon />
      </button>
    </div>
  )
}

export default MenuBar
