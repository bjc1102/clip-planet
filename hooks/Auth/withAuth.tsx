import React from 'react'
import { NextPage } from 'next'
import { useAuth } from './AuthProvider'

const withAuth = (Component: NextPage | React.FC, LoginComponent: React.FC) => {
  const Auth = () => {
    const auth = useAuth()

    return auth.isToken ? <Component /> : <LoginComponent />
  }

  return Auth
}

export default withAuth
