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
  type?: string
}

const AddCard: React.FC<IAddCardProps> = (props) => {
  const { type = '추가' } = props
  const [form, setForm] = React.useState<IForm>({
    title: '',
    content: '',
    url: '',
  })
  const cardList = useRecoilValue(CardListState)
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
    console.log(cardList)
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
      <Input name="title" type="text" maxLength={30} onChange={handleChange} />
      <Input
        name="content"
        type="text"
        maxLength={30}
        onChange={handleChange}
      />
      <Input name="url" type="url" onChange={handleChange} />
    </SiteForm>
  )
}

export default AddCard
