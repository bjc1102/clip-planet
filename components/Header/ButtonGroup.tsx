import React from 'react'
import CategoryButton from './CategoryButton'
import { nanoid } from 'nanoid'
import { useRecoilState } from 'recoil'
import { conditionState } from '../../atoms/atoms'
import { defaultConditionState } from '../../atoms/atomsValue'

interface IButtonGroup {
  title: string
  onClick: () => void
}

const ButtonGroup = () => {
  const [condition, setCondition] = useRecoilState(conditionState)
  const buttonList: IButtonGroup[] = [
    {
      title: '즐겨찾기',
      onClick: () =>
        setCondition(() => {
          if (condition.type === '')
            return {
              ...condition,
              type: '즐겨찾기',
            }
          else
            return {
              ...defaultConditionState,
            }
        }),
    },
    {
      title: '+',
      onClick: () => console.log('추가 예정'),
    },
  ]
  return (
    <div
      className="inline-flex items-center rounded-md shadow-sm divide-x first:rounded-l-lg"
      role="group"
    >
      {buttonList.map((v, index, arr) => {
        return (
          <CategoryButton
            key={nanoid()}
            title={v.title}
            nowType={condition.type}
            index={index}
            length={arr.length}
            onClick={v.onClick}
          />
        )
      })}
    </div>
  )
}

export default ButtonGroup
