'use client'

import React, { useState, useContext, createContext } from 'react'

import { IUser } from '@/types'

interface IAuthCtx {
  user: IUser | null
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
}

const AuthContext = createContext<IAuthCtx | null>(null)

interface IProps {
  children: React.ReactNode
}

export const AuthContextProvider = ({ children }: IProps): JSX.Element => {
  const [user, setUser] = useState<IUser | null>(null)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
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
