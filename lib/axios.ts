import { LocalToken } from '@/types/Token'
import axios, { AxiosRequestHeaders } from 'axios'
import { getCookie } from 'cookies-next'

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
    const token = getCookie('token') ?? ''

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
    const localToken = JSON.parse(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      localStorage.getItem('refresh-token') ?? ''
    ) as LocalToken

    if (error.response.status === 401) {
      const token = await axios.post(
        'http://localhost:5000/api/auth/refresh',
        {},
        {
          headers: {
            Authorization: `Bearer ${localToken.state.refreshToken}`,
          },
        }
      )

      console.log(token)
    }
    return error
  }
)

// instance.interceptors.response.use(
//   function (res) {
//     // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
//     // 응답 데이터가 있는 작업 수행
//     return res
//   },
//   async function (error) {
//     // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
//     // 응답 오류가 있는 작업 수행
//     const localToken = JSON.parse(
//       // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//       localStorage.getItem('refresh-token') ?? ''
//     ) as LocalToken

//     await instance.post(
//       'api/auth/refresh',
//       {},
//       {
//         headers: {
//           Authorization: localToken.state.refreshToken ?? '',
//         },
//       }
//     )

//     return Promise.reject(error)
//   }
// )
