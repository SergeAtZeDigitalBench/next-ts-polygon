import { useState } from 'react'

const isServer = () => typeof window === 'undefined'

interface IHookProps<D> {
  key: string
  initValue: D
}

export const useLocalStorage = <D = unknown>({
  key,
  initValue,
}: IHookProps<D>): [D, (value: D) => void] => {
  const [savedValue, setSavedValue] = useState<D>(() => {
    let foundValue: D = initValue
    if (isServer()) return initValue

    try {
      const valueFound = window.localStorage.getItem(key)
      if (!valueFound) {
        window.localStorage.setItem(key, JSON.stringify(initValue))
        return initValue
      }

      return JSON.parse(valueFound)
    } catch (error) {
      console.warn('Error: ', error)
      return initValue
    }
  })

  const handleSaveValue = (value: D) => {
    if (isServer()) return

    try {
      setSavedValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.warn('Error: ', error)
    }
  }

  return [savedValue, handleSaveValue]
}
