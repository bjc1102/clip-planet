import React from 'react'
import { useSetRecoilState } from 'recoil'
import { CardListState } from '../atoms/page'
import ICard from '../types/Card'
import { getNowDate } from '../utils/getDate'

type IForm = Pick<ICard, 'title' | 'content' | 'url'>
// interface ISiteInputProps {
//   id?: string
// }

const SiteInput: React.FunctionComponent = (props) => {
  const setCardList = useSetRecoilState(CardListState)
  const [form, setForm] = React.useState<IForm>({
    title: '',
    content: '',
    url: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCardList((oldValue: ICard[]) => {
      return [
        ...oldValue,
        {
          ...form,
          date: getNowDate(),
          isMark: false,
        },
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
    <form
      className="flex flex-col gap-2 my-3 overflow-hidden"
      onSubmit={handleSubmit}
    >
      <input
        className="theme-container rounded-lg"
        onChange={handleChange}
        type="text"
        placeholder="제목"
        maxLength={30}
        name="title"
      />
      <input
        className="theme-container rounded-lg"
        onChange={handleChange}
        type="text"
        placeholder="사이트 정보"
        maxLength={30}
        name="content"
      />
      <div className="flex gap-2">
        <input
          className="w-11/12 bg-gray-700 rounded-lg"
          onChange={handleChange}
          type="url"
          placeholder="사이트 URL"
          name="url"
        />
        <button
          className="flex-1 border border-accent rounded-lg"
          type="submit"
        >
          저장
        </button>
      </div>
    </form>
  )
}

export default SiteInput
