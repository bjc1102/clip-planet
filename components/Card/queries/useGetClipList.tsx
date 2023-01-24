import React from 'react'
import { clipAPI } from 'lib/axios/instance'
import { useQuery } from '@tanstack/react-query'
import { UserClipListKey } from 'constant/query.key'

const useGetClipList = () =>
  useQuery(UserClipListKey, clipAPI.getClips, {
    staleTime: Infinity,
  })

export default useGetClipList
