import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { clipAPI } from 'lib/axios/instance'
import { UserFavoriteClipKey } from 'constant/query.key'

const useUpdateFavoriteClip = (id: number) =>
  useMutation([...UserFavoriteClipKey, id], clipAPI.updateMarkClip)

export default useUpdateFavoriteClip
