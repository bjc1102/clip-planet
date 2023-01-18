import React from 'react'
import { clipAPI } from 'lib/axios/instance'
import { useQuery } from 'react-query'

const useGetClipList = () => {
  const { data: clipList, isLoading } = useQuery(
    ['user-clips'],
    clipAPI.getClips
  )

  return { clipList, isLoading }
}

export default useGetClipList
