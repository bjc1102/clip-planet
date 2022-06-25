import React from 'react'
import { useSetRecoilState } from 'recoil'
import { conditionState, defaultConditionState } from '../../atoms/condition'
import Input from '../Input'

const Search: React.FC = () => {
  const setCond = useSetRecoilState(conditionState)
  const handleSearchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
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
          type: '검색',
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
