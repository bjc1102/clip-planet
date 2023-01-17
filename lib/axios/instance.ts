import { ClipType } from '@/types/Clip'
import { parsingAuthorization } from '@/utils/parsingToken'
import axios, { AxiosRequestConfig } from 'axios'
import { getCookie } from 'cookies-next'
import instance, { baseURL } from '.'

const setHeaders = (): AxiosRequestConfig => {
  const refreshToken = getCookie('refresh-token')

  return {
    headers: {
      Authorization: parsingAuthorization(refreshToken),
    },
    withCredentials: true,
  }
}

const authAPI = {
  setRefreshToken: async () => {
    const res = await axios.post(
      `${baseURL}auth/refresh`,
      {},
      { ...setHeaders() }
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
