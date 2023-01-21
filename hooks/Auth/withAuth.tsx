import React from 'react'
import { NextPage } from 'next'
import { useAuth } from './AuthProvider'

const withAuth = (Component: NextPage | React.FC, LoginComponent: React.FC) => {
  const Auth = () => {
    const auth = useAuth()

    // 토큰이 있다면 컴포넌트 리턴
    if (auth.isToken) return <Component />

    return <LoginComponent />
  }

  return Auth
}

export default withAuth
