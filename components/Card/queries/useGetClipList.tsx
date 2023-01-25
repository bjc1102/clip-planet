import React from 'react'
import { clipAPI } from 'lib/axios/instance'
import { useQuery } from '@tanstack/react-query'
import { UserClipListKey } from 'constant/query.key'
import { errorToast } from '@/utils/toast'

const useGetClipList = () =>
  useQuery(UserClipListKey, clipAPI.getClips, {
    staleTime: Infinity,
    onError() {
      errorToast('새로고침 후 다시 시도해주세요')
    },
    select(data) {
      return [...data].reverse()
    },
  })

export default useGetClipList
