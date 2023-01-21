import React from 'react'
import { clipAPI } from 'lib/axios/instance'
import { useQuery } from '@tanstack/react-query'
import { UserClipListKey } from 'constant/query.key'

const useGetClipList = () => {
  return useQuery(UserClipListKey, clipAPI.getClips, {
    staleTime: Infinity,
    cacheTime: Infinity,
  })
}

export default useGetClipList
