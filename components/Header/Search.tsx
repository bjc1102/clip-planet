import React from 'react'
import { useSetRecoilState } from 'recoil'
import { conditionState } from '../../atoms/atoms'
import { defaultConditionState } from '../../atoms/atomsValue'
import Input from '../Input'

const Search: React.FC = () => {
  const setCond = useSetRecoilState(conditionState)
  const handleSearchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    // eslint-disable-next-line
    const { name, value } = e.target
    if (value === '') {
      setCond(() => {
        return {
          ...defaultConditionState,
        }
      })
    } else {
      setCond(() => {
        return {
          type: '키워드',
          search: value,
        }
      })
    }
  }
  return (
    <Input
      name="search"
      type="text"
      placeholder="제목으로 검색하기"
      onChange={handleSearchData}
    />
  )
}

export default Search
