import React from 'react'
import GoogleIcon from 'public/assets/GoogleIcon'
import axios from 'axios'

const LoginButton = () => {
  const onClick = async () => {
    console.log(await axios.get('http://localhost:5000/auth'))
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
    >
      <GoogleIcon />
      구글로 로그인하기
    </button>
  )
}

export default LoginButton
