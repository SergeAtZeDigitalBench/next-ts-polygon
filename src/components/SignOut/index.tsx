'use client'

import { signOut } from 'next-auth/react'

const SignOut = (): JSX.Element => {
  return (
    <div>
      <button onClick={() => signOut({ redirect: true })} className="underline">
        sign out
      </button>
    </div>
  )
}

export default SignOut
