import { AtomEffect } from 'recoil'

import ICard from '../types/Card'

class LocalStorage {
  constructor() {
    console.log(typeof window)
  }

  static setItem(key: string, item: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, item)
    }
  }

  static getItem(key: string) {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key)
    }
    return null
  }

  static removeItem(key: string) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key)
    }
  }
}

export default LocalStorage

export const localStorageEffect: (key: string) => AtomEffect<ICard[]> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = LocalStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? LocalStorage.removeItem(key)
        : LocalStorage.setItem(key, JSON.stringify(newValue))
    })
  }
