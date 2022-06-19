import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { nanoid } from 'nanoid'

import Input from '../Input'
import SiteForm from './SiteForm'
import { CardListState } from '../../atoms/card'
import { getNowDate } from '../../utils/getDate'

import ICard from '../../types/Card'
import { IForm } from '../../types/Form'

interface IAddCardProps {
  id?: string
  type?: string
}

const AddCard: React.FC<IAddCardProps> = (props) => {
  const [form, setForm] = React.useState<IForm>({
    title: '',
    content: '',
    url: '',
  })
  const setCardList = useSetRecoilState(CardListState)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCardList((oldValue: ICard[]) => {
      return [
        {
          id: nanoid(),
          ...form,
          date: getNowDate(),
          isMark: false,
        },
        ...oldValue,
      ]
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((oldValue: IForm) => {
      return {
        ...oldValue,
        [name]: value,
      }
    })
  }
  return (
    <SiteForm onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 p-3">
        <Input
          name="title"
          type="text"
          required
          placeholder="제목을 입력해주세요"
          maxLength={30}
          onChange={handleChange}
        />
        <Input
          name="content"
          type="text"
          placeholder="내용을 입력해주세요"
          maxLength={30}
          onChange={handleChange}
        />
        <Input
          name="url"
          type="url"
          required
          placeholder="URL을 입력해주세요"
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-end items-center p-3 space-x-2 rounded-b border-t border-gray-600">
        <button
          type="submit"
          className="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          등록하기
        </button>
      </div>
    </SiteForm>
  )
}

export default AddCard
