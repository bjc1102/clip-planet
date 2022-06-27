import React from 'react'
import { useRecoilState } from 'recoil'
import { conditionState } from '../atoms/atoms'
import { defaultConditionState } from '../atoms/atomsValue'

export const useConditionUpdater = () => {
  const [cond, setCondition] = useRecoilState(conditionState)
  const setConditionUpdate = (value: string) => {
    setCondition(() => {
      if (cond.type === value)
        return {
          ...defaultConditionState,
        }
      return {
        ...defaultConditionState,
        type: value,
      }
    })
  }

  return { cond, setConditionUpdate }
}
