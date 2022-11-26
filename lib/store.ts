import create, { StateCreator } from 'zustand'
import { persist, PersistOptions } from 'zustand/middleware'

interface Token {
  refreshToken: string
}

type MyPersist = (
  config: StateCreator<Token>,
  options: PersistOptions<Token>
) => StateCreator<Token>

export const useTokenStore = create<Token>(
  (persist as MyPersist)(
    (set, get) => ({
      refreshToken: '',
    }),
    {
      name: 'refresh-token', // name of item in the storage (must be unique)
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
  )
)
