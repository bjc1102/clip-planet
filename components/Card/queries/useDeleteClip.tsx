import { useMutation } from '@tanstack/react-query'
import { UserDeleteClipKey } from 'constant/query.key'
import { clipAPI } from 'lib/axios/instance'

const useDeleteClip = () => useMutation(UserDeleteClipKey, clipAPI.deleteClip)

export default useDeleteClip
