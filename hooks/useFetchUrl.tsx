import React from 'react'
import Axios from 'lib/axios/instance'
import { useQuery } from 'react-query'

const useFetchUrl = (url: string) => {
  const queryFn = () => Axios.setSiteUrl(url)
  const { data, isLoading, error, refetch } = useQuery(['fetchURL'], queryFn, {
    enabled: false,
  })

  return { data, refetch }
}

export default useFetchUrl
