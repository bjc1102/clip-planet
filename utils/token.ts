import { refreshToken, token } from 'constant/const'
import { CookieValueTypes, getCookie } from 'cookies-next'

export const parsingAuthorization = (token: CookieValueTypes) => {
  return `Bearer ${token}`
}

export const findAccessToken = () => {
  return getCookie(token)
}

export const findRefreshToken = () => {
  const token = getCookie(refreshToken)
  return token
}
