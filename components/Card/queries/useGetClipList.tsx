import React from 'react'
import { clipAPI } from 'lib/axios/instance'
import { useQuery } from '@tanstack/react-query'
import { UserClipListKey } from 'static/query.key'

const useGetClipList = () => {
  return useQuery(UserClipListKey, clipAPI.getClips, {
    staleTime: Infinity,
  })
}

export default useGetClipList
