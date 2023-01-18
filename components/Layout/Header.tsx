import { useTokenStore } from 'lib/store'
import dynamic from 'next/dynamic'
import Icon from 'public/assets/PlanetIcon'
import React from 'react'
import BookIcon from 'public/assets/BookIcon'

// 토큰을 클라이언트에서 검증하게 되니 에러가 발생한다
const Login = dynamic(() => import('@/components/Login/LoginButton'), {
  ssr: false,
})

const Header = () => {
  const { token } = useTokenStore()

  return (
    <header>
      <nav className="border-gray-200 px-24 lg:px-6 py-2.5 bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a
            href="https://localhost:3000"
            className="flex gap-2 items-center [&>*]:fill-accentColor1"
          >
            <Icon />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              ClipPlanet
            </span>
          </a>
          {/* InputBox 우측 */}
          {/* <div>
            <GatheringInput />
          </div> */}
          {/* navbar 우측 */}
          <div className="flex justify-center items-center lg:order-2">
            {!token && <Login />}
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
        </div>
      </nav>
    </header>
  )
}

export default Header
