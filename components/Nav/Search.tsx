import React from 'react'

const Search: React.FC = () => {
  return (
    <input
      placeholder="제목 검색하기"
      type="text"
      className="h-7 p-5 bg-gray-700 rounded-lg"
    ></input>
  )
}

export default Search
