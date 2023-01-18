import { ClipType } from '@/types/clip'
import { parsingAuthorization } from '@/utils/parsingToken'
import axios, { AxiosRequestConfig } from 'axios'
import { getCookie } from 'cookies-next'
import instance, { baseURL } from '.'

const authAPI = {
  setRefreshToken: async () => {
    const refreshToken = getCookie('refresh-token')
    const res = await axios.post(
      `${baseURL}auth/refresh`,
      {},
      {
        headers: {
          Authorization: parsingAuthorization(refreshToken),
        },
        withCredentials: true,
      }
    )
    return res.status === 201
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
}

export { clipAPI, authAPI }
