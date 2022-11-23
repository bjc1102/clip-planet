import { deleteCookie } from 'cookies-next'

const setToken = (refreshToken: string | undefined) => {
  if (refreshToken) {
    localStorage.setItem('refresh-token', refreshToken)
    deleteCookie('refresh-token', { path: '/' })
  }
}

export default setToken
