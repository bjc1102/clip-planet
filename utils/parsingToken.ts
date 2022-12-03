import { CookieValueTypes } from 'cookies-next'

/**
 * bearer 붙이기
 */
export const parsingAuthorization = (token: CookieValueTypes) => {
  return `Bearer ${token}`
}
