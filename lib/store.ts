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

interface Width {
  sWidth: number
  setSWidth: (width: number) => void
}

export const useWidthStore = create<Width>((set) => ({
  sWidth: 240,
  setSWidth: (width) =>
    set(() => ({
      sWidth: width,
    })),
}))
