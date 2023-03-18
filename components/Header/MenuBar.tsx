import React from 'react'

const MenuBar = () => {
  return (
    <div className="flex justify-center items-center lg:order-2 max-md:hidden">
      <a
        href="#"
        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-800"
      >
        시작하기
      </a>
    </div>
  )
}

export default MenuBar
