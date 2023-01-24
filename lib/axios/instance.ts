import { ClipType } from '@/types/clip'
import { parsingAuthorization } from '@/utils/token'
import axios from 'axios'
import { getCookie } from 'cookies-next'
import instance, { baseURL } from '.'

const authAPI = {
  login: async () => {
    location.href = `${baseURL}auth/google/login`
  },
  setRefreshToken: async (): Promise<boolean> => {
    const refreshToken = getCookie('refresh-token')

    const result = await axios.post(
      `${baseURL}auth/refresh`,
      {},
      {
        headers: {
          Authorization: parsingAuthorization(refreshToken),
        },
        withCredentials: true,
      }
    )
    return result.status === 201
  },
}

const clipAPI = {
  setClip: async (url: string): Promise<ClipType> => {
    const result = await instance.post('/sites/set/clip', { siteURL: url })
    return result.data
  },
  getClips: async (): Promise<ClipType[]> => {
    const result = await instance.get('/sites/get/clips')
    return result.data
  },
  deleteClip: async (id: number): Promise<null> => {
    const result = await instance.delete(`sites/delete/clip/${id}`)
    return result.data
  },
}

export { clipAPI, authAPI }
