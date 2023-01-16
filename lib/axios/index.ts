import { parsingAuthorization } from '@/utils/parsingToken'
import axios, { AxiosRequestHeaders } from 'axios'
import { getCookie } from 'cookies-next'
import Axios from './instance'

export const baseURL = 'http://localhost:5000/api/'

const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  withCredentials: true,
})

export default instance

interface HeaderType extends AxiosRequestHeaders {
  ['Content-Type']: string
  Authorization: string
}

// 토큰 부착하기
instance.interceptors.request.use(
  (config) => {
    const headers = config.headers as HeaderType
    const token = getCookie('access-token') ?? ''

    if (token) {
      headers['Content-Type'] = 'application/json'
      headers.Authorization = parsingAuthorization(token)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const refreshToken = getCookie('refresh-token')
    if (error.response.status === 401 && refreshToken) {
      await Axios.setRefreshToken()
    }
    return error
  }
)
