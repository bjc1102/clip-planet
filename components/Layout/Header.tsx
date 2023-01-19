import { useTokenStore } from 'lib/store'
import dynamic from 'next/dynamic'
import PlanetIcon from 'public/assets/PlanetIcon'
import React from 'react'
import BookIcon from 'public/assets/BookIcon'
import useSetClip from '@/components/Card/queries/useSetClip'
import useForm from '@/hooks/useForm'
import { URLType } from '@/types/clip'
import urlValidation from '@/utils/validate'
import Input from '@/components/common/Input'
import LoadingIcon from 'public/assets/LoadingIcon'

// 토큰을 클라이언트에서 검증하게 되니 에러가 발생한다
const Login = dynamic(() => import('@/components/Login/LoginButton'), {
  ssr: false,
})

const Header = () => {
  const { token } = useTokenStore()
  const { isLoading, setClip } = useSetClip()

  const { error, handleChange, handleSubmit } = useForm<URLType>({
    initialValue: { siteURL: '' },
    validate: urlValidation,
    onSubmit: ({ siteURL }) => setClip(siteURL),
  })

  return (
    <nav className="w-full border-gray-200 py-3 bg-gray-800">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center max-md:px-4">
        <a
          href="https://localhost:3000"
          className="flex gap-2 items-center [&>*]:fill-accentColor1 max-md:hidden"
        >
          <div className="w-8 h-8">
            <PlanetIcon />
          </div>
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            ClipPlanet
          </span>
        </a>
        <form className="w-[800px]" onSubmit={handleSubmit}>
          <label className="mb-2 text-sm font-medium sr-only text-white">
            추가하기
          </label>
          <div className="relative">
            <Input
              onChange={handleChange}
              name="siteURL"
              placeholder="URL을 입력하세요"
              required
            />
            <button
              type="submit"
              className="absolute cursor-pointer rounded-r-lg text-white top-0 right-0 h-full focus:ring-4 focus:outline-none font-medium text-sm px-4 py-2 bg-accentColor1 hover:bg-blue-700 focus:ring-blue-800"
            >
              {isLoading ? <LoadingIcon /> : '추가하기'}
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center lg:order-2 max-md:hidden">
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
  )
}

export default Header
