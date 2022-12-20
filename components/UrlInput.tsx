import useFetchUrl from '@/hooks/useFetchUrl'
import React from 'react'

const UrlInput = () => {
  const [url, setUrl] = React.useState('')
  const [error, setError] = React.useState('')
  const { data, refetch } = useFetchUrl(url)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    setUrl(e.currentTarget.value)
  }
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const reg =
      /((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/gi

    if (!url.length) setError('URL을 입력해주세요')
    else if (!reg.test(url)) setError('URL형식이 아닙니다.')
    else {
      setError('')
      refetch()
    }
  }

  return (
    <>
      <label
        htmlFor="추가하기"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        추가하기
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          onChange={onChange}
          type="url"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="URL 저장하기"
          required
        />
        <button
          onClick={onSubmit}
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-accentColor1 hover:text-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          추가하기
        </button>
      </div>
      <span className="text-red-600">{error}</span>
    </>
  )
}

export default UrlInput
