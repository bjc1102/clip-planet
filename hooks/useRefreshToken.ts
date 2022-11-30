import React from 'react'

import { useTokenStore } from 'lib/store'
import { deleteCookie, getCookies } from 'cookies-next'

const useRefreshToken = () => {
  const { refreshToken: LocalRefreshToken, setRefreshToken } = useTokenStore()
  const { 'refresh-token': refreshToken } = getCookies()

  React.useEffect(() => {
    if (refreshToken) {
      localStorage.setItem('refresh-token', refreshToken)
      deleteCookie('refresh-token', { path: '/' })

      window.addEventListener('storage', () => {
        setRefreshToken(refreshToken)
        console.log('updated')
      })
    }
  }, [refreshToken])

  return LocalRefreshToken
}

export default useRefreshToken
