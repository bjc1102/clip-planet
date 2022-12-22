import React from 'react'

import useSetClip from '@/hooks/useSetClip'
import CrampsIcon from 'public/assets/CrampsIcon'
import SearchIcon from 'public/assets/SearchIcon'
import SelectButton from './SelectButton'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import PlusIcon from 'public/assets/Plus'

type selectType = '검색' | '추가'

const GatheringInput = () => {
  const [url, setUrl] = React.useState('')
  const [type, setType] = React.useState<selectType>('검색')
  const [error, setError] = React.useState('')
  const [isOpen, setOpen] = React.useState(false)
  const { refetch } = useSetClip(url)
  const ref = React.useRef<HTMLDivElement>(null)
  const close = useOutsideClick(ref, () => setOpen(false))

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  const selectType = (InputType: selectType) => {
    return () => {
      setOpen(false)
      setType(InputType)
    }
  }
  const toggleTypeBtn = () => {
    console.log()
    return setOpen((v) => !v)
  }

  const changeTypeIcon = () => {
    if (type === '검색') return <SearchIcon />
    if (type === '추가') return <PlusIcon />
  }

  return (
    <>
      <label
        htmlFor="input"
        className="mb-2 text-sm font-medium sr-only text-white"
      >
        input box
      </label>
      <div className="relative w-[550px] flex items-center">
        <div>
          <button
            onClick={toggleTypeBtn}
            className="flex justify-center items-center w-20 z-10 p-2 text-sm font-medium text-center rounded-l-lg bg-gray-700 hover:bg-gray-600 text-white"
            type="button"
          >
            <span>{type}</span>
            <CrampsIcon />
          </button>
          {isOpen && (
            <div
              ref={ref}
              className="z-10 absolute bg-primaryColor1 rounded shadow w-44"
            >
              <ul className="py-1 text-sm text-accentColor2">
                <li>
                  <SelectButton content="검색" onClick={selectType('검색')} />
                </li>
                <li>
                  <SelectButton content="추가" onClick={selectType('추가')} />
                </li>
              </ul>
            </div>
          )}
        </div>
        <input
          onChange={onChange}
          type="url"
          className="block w-full p-2 text-sm bg-primaryColor1 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="URL 저장하기"
          required
        />
        <button
          onClick={onSubmit}
          type="submit"
          className="p-2 rounded-r-lg bg-gray-700 hover:bg-gray-600 [&>*]:stroke-white"
        >
          {changeTypeIcon()}
        </button>
      </div>
      {/* <span className="text-red-600 absolute">{error}</span> */}
    </>
  )
}

export default GatheringInput
