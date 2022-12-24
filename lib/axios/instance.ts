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

const Axios = {
  setRefreshToken: async () => {
    const res = await axios.post(
      `${baseURL}auth/refresh`,
      {},
      { ...setHeaders() }
    )
    return res.status === 201
  },
  setClip: async (url: string) => {
    return await instance.post('/sites/set/clip', { siteURL: url })
  },
}

export default Axios
