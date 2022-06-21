import React from 'react'
import { useRecoilState } from 'recoil'
import _ from 'lodash'

import Input from '../Input'
import SiteForm from './SiteForm'
import { CardListState, defaultFormValue } from '../../atoms/card'
import { defaultModalState, modalState } from '../../atoms/modal'

import ICard from '../../types/Card'
import IForm from '../../types/Form'
import { getCardData, getSliceCardData } from '../../utils/handleData'

const CardForm: React.FC = () => {
  const [cardList, setCardList] = useRecoilState(CardListState)
  const [modal, setModal] = useRecoilState(modalState)
  const [form, setForm] = React.useState<IForm>(() => {
    const findCard = _.find(cardList, {
      id: modal.id,
    })
    return findCard
      ? {
          title: findCard.title,
          content: findCard.content,
          url: findCard.url,
        }
      : defaultFormValue
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCardList((oldValue: ICard[]) => {
      if (!modal.id.length) {
        return [
          {
            ...getCardData(form),
          },
          ...oldValue,
        ]
      }

      const Idx = _.findIndex(cardList, { id: modal.id })
      return [
        ...getSliceCardData({
          cardList,
          index: Idx,
          value: {
            ...cardList[Idx],
            ...form,
          },
        }),
      ]
    })

    setModal({
      ...defaultModalState,
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
          value={form.title}
          type="text"
          required
          placeholder="제목을 입력해주세요"
          maxLength={30}
          onChange={handleChange}
        />
        <Input
          name="content"
          value={form.content}
          type="text"
          placeholder="내용을 입력해주세요"
          maxLength={30}
          onChange={handleChange}
        />
        <Input
          name="url"
          value={form.url}
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

export default CardForm
