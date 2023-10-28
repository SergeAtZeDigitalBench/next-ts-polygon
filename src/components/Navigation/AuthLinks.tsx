'use client'

import React from 'react'

import { useAuthContext } from '@/context/AuthContext'

const AuthLinks = (): JSX.Element => {
  const { user } = useAuthContext()
  return <div>{/* Links based on auth status... */}</div>
}

export default AuthLinks
