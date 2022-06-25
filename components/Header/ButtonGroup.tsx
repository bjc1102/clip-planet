import React from 'react'
import Button from './Button'
import { nanoid } from 'nanoid'

const ButtonGroup = () => {
  const buttonList = ['즐겨찾기', '추가하기']
  return (
    <div
      className="inline-flex items-center rounded-md shadow-sm divide-x first:rounded-l-lg"
      role="group"
    >
      {buttonList.map((v, index, arr) => {
        console.log(arr.length)
        return (
          <Button key={nanoid()} title={v} index={index} length={arr.length} />
        )
      })}
    </div>
  )
}

export default ButtonGroup
