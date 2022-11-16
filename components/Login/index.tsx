import React from 'react'
import GuideText from '@/components/Login/GuideText'
import LoginButton from '@/components/Login/LoginButton'

const Login = () => {
  return (
    <div className="min-h-screen flexCenter">
      <div className="flexCenter flex-col gap-3">
        <GuideText />
        <LoginButton />
      </div>
    </div>
  )
}

export default Login
