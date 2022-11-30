import React from 'react'
import { getCookies } from 'cookies-next'
import { useTokenStore } from 'lib/store'
import Axios from 'lib/axios/instance'

const useLogin = () => {
  const { token: isToken, setToken } = useTokenStore()
  const { 'access-token': accessToken, 'refresh-token': refreshToken } =
    getCookies()

  React.useEffect(() => {
    ;(async () => {
      if (accessToken) setToken(true)
      if (!accessToken && refreshToken) setToken(await Axios.setRefreshToken())
    })()
  }, [])

  return isToken
}

export default useLogin
