import axios, { AxiosRequestHeaders } from 'axios'
import { getCookie } from 'cookies-next'
import Axios from './instance'

const instance = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 5000,
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
      headers.Authorization = `${token}`
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
    if (error.response.status === 401) {
      await Axios.setRefreshToken()
    }
    return error
  }
)
