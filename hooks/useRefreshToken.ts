import React from 'react'

import { useTokenStore } from 'lib/store'
import { deleteCookie, getCookies } from 'cookies-next'

const useRefreshToken = () => {
  const isLogin = useTokenStore()

  React.useEffect(() => {
    const { 'refresh-token': refreshToken } = getCookies()
    if (refreshToken) {
      localStorage.setItem('refresh-token', refreshToken)
      deleteCookie('refresh-token', { path: '/' })
      useTokenStore.setState({ refreshToken })
    }
  }, [])

  return isLogin.refreshToken
}

export default useRefreshToken
