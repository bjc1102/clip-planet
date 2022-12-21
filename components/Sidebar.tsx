import React from 'react'
import Icon from 'public/assets/Icon'

const Sidebar = () => {
  // const { windowSize } = useWindowSize()

  return (
    <aside className="relative max-w-fit" aria-label="Sidebar">
      <div className="min-h-full fixed w-60 overflow-y-auto py-4 px-3 bg-primaryColor2">
        <a
          href="https://flowbite.com/"
          className="flex [&>svg]:fill-accentColor1 gap-2 items-center pl-2.5 mb-5"
        >
          <Icon />
          <span className="self-center text-white text-xl font-semibold whitespace-nowrap">
            ClipPlanet
          </span>
        </a>
        <ul className="space-y-2">
          <li>
            <div className="flex items-center cursor-pointer p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
              <span className="ml-3">대쉬보드</span>
            </div>
          </li>
          <li>
            <div className="flex group [&>svg]:fill-accentColor2 items-center cursor-pointer p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
              <Icon />
              <span className="ml-3">클립 추가하기</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
