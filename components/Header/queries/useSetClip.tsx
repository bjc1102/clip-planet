import React from 'react'
import { clipAPI } from 'lib/axios/instance'
import { useMutation } from '@tanstack/react-query'

const useSetClip = () => {
  const { isLoading, mutate: setClip } = useMutation(
    ['setClip'],
    clipAPI.setClip
  )

  return { isLoading, setClip }
}

export default useSetClip
