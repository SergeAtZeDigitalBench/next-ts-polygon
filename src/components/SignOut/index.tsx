'use client'

import { signOut } from 'next-auth/react'

const SignOut = (): JSX.Element => {
  const handleSignOut = () => {
    signOut()
  }

  return (
    <button onClick={handleSignOut} className="underline">
      sign out
    </button>
  )
}

export default SignOut
