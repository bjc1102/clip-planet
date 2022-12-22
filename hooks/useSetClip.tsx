import React from 'react'
import Axios from 'lib/axios/instance'
import { useQuery } from 'react-query'

const useSetClip = (url: string) => {
  const queryFn = () => Axios.setClip(url)
  const { data, isLoading, error, refetch } = useQuery(['setClip'], queryFn, {
    enabled: false,
  })

  return { data, refetch }
}

export default useSetClip
