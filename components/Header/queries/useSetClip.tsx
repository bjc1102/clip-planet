import React from 'react'
import { clipAPI } from 'lib/axios/instance'
import { useMutation } from '@tanstack/react-query'
import { UserSetClipKey } from 'constant/query.key'

const useSetClip = () => useMutation(UserSetClipKey, clipAPI.setClip)

export default useSetClip
