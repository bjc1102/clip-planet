import React from 'react'
import { clipAPI } from 'lib/axios/instance'
import { useMutation } from 'react-query'

const useSetClip = () => {
  const {
    data,
    isLoading,
    mutate: setClip,
  } = useMutation(['setClip'], clipAPI.setClip)

  return { data, isLoading, setClip }
}

export default useSetClip
