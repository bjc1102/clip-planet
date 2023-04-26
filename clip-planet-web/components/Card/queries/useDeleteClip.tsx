import { useMutation } from '@tanstack/react-query'
import { UserDeleteClipKey } from 'constant/query.key'
import { clipAPI } from 'lib/axios/instance'

const useDeleteClip = (id: number) =>
  useMutation([...UserDeleteClipKey, id], clipAPI.deleteClip)

export default useDeleteClip
