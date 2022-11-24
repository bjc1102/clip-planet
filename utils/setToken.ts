import { deleteCookie, getCookies } from 'cookies-next'

const manageToken = () => {
  const { 'refresh-token': refreshToken } = getCookies()

  if (refreshToken) {
    localStorage.setItem('refresh-token', refreshToken)
    deleteCookie('refresh-token', { path: '/' })
  }
}

/**
 *
 * access-token은 쿠키에 그대로 저장하고 refresh-token은 localStorage에 저장한다
 *
 * @returns {void}
 */
const setToken = () => manageToken()

export default setToken
