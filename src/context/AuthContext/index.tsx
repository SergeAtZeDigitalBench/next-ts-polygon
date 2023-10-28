'use client'

import React, { useState, useContext, createContext } from 'react'

import { IUser, IRegisterInput, ILoginInput } from '@/types'
import { isFormValid } from '@/lib/formUtils'
import { fetchJson } from '@/lib/fetch'

interface IAuthCtx {
  user: IUser | null
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
  register: (input: IRegisterInput, onSuccess?: () => void) => Promise<void>
  login: (input: ILoginInput, onSuccess?: () => void) => Promise<void>
  logout: (onSuccess?: () => void) => void
  error: string | null
  isLoading: boolean
}

const AuthContext = createContext<IAuthCtx | null>(null)

interface IProps {
  children: React.ReactNode
}

export const AuthContextProvider = ({ children }: IProps): JSX.Element => {
  const [user, setUser] = useState<IUser | null>(null)
  const [error, setError] = useState<null | string>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const register = async (input: IRegisterInput, onSuccess?: () => void) => {
    if (!isFormValid(input)) {
      setError('Form invalid')
      return
    }

    setIsLoading(true)
    setError(null)
    const registerUrl = `${process.env.NEXT_PUBLIC_AUTH_SERVER}/auth/register`
    const [res, err] = await fetchJson<{
      data: { id: string; email: string; name: string }
    }>(registerUrl, {
      method: 'POST',
      body: JSON.stringify(input),
    })

    setIsLoading(false)
    setError(err)

    if (res?.data) {
      setUser(res.data)
      onSuccess && onSuccess()
    }
  }

  const login = async (input: ILoginInput, onSuccess?: () => void) => {
    if (!isFormValid(input)) {
      setError('Form invalid')
      return
    }

    setIsLoading(true)
    setError(null)

    const loginUrl = `${process.env.NEXT_PUBLIC_AUTH_SERVER}/auth/login`
    const [res, err] = await fetchJson<{
      data: { id: string; email: string; name: string }
    }>(loginUrl, {
      method: 'POST',
      body: JSON.stringify(input),
    })

    setIsLoading(false)
    setError(err)

    if (res?.data) {
      setUser(res.data)
      onSuccess && onSuccess()
    }
  }

  const logout = (onSuccess?: () => void) => {
    if (!user) return
    setUser(null)
    onSuccess && onSuccess()
  }

  return (
    <AuthContext.Provider
      value={{ user, setUser, register, login, logout, error, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const ctx = useContext(AuthContext)

  if (!ctx) {
    throw new Error('No AuthContext context found. Check your provider scope.')
  }

  return ctx
}
