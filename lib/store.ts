import { getCookie } from 'cookies-next'
import create from 'zustand'

interface Token {
  token: boolean
  setToken: (token: boolean) => void
}

export const useTokenStore = create<Token>((set) => ({
  token: (getCookie('access-token') as boolean) ?? false,
  setToken: (isToken) => {
    set(() => ({ token: isToken }))
  },
}))
