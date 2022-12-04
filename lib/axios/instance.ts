import { parsingAuthorization } from '@/utils/parsingToken'
import axios, { AxiosRequestConfig } from 'axios'
import { getCookie } from 'cookies-next'
import instance from '.'

const setHeaders = (): AxiosRequestConfig => {
  const refreshToken = getCookie('refresh-token')

  return {
    headers: {
      Authorization: parsingAuthorization(refreshToken),
    },
  }
}

const Axios = {
  setRefreshToken: async () => {
    const res = await axios.post(
      'http://localhost:5000/api/auth/refresh',
      {},
      { ...setHeaders(), withCredentials: true }
    )
    return res.status === 201
  },
  setSiteInfo: async (url: string) => {
    return await instance.post('api/sites', { siteURL: url })
  },
}

export default Axios
