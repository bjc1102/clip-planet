import React from 'react'
import { useSetRecoilState } from 'recoil'

import Input from '../Input'
import SiteForm from './SiteForm'
import { CardListState } from '../../atoms/page'
import { getNowDate } from '../../utils/getDate'

import ICard from '../../types/Card'
import { IForm } from '../../types/Form'

const AddCard = () => {
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
