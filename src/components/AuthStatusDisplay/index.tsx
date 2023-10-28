'use client'

import Link from 'next/link'

import { useAuthContext } from '@/context/AuthContext'

const AuthStatusDisplay = (): JSX.Element => {
  const { user, setUser } = useAuthContext()

  return (
    <div className="max-w-sm mx-auto my-4 p-2 flex justify-between items-center gap-2 rounded bg-orange-400">
      {!!user ? (
        <>
          <p>Hi {user.name}, you are logged in 😀 </p>
          <button
            onClick={() => setUser(null)}
            className="px-2 py-1 rounded bg-green-600 border border-green-900 hover:bg-green-700 text-white min-w-[100px]"
          >
            Logout{' '}
          </button>
        </>
      ) : (
        <>
          <p>you are currently logged out 😜</p>
          <Link
            href="/login"
            className="px-2 py-1 rounded bg-green-600 border border-green-900 hover:bg-green-700 text-white min-w-[100px]"
          >
            Login{' '}
          </Link>
        </>
      )}
    </div>
  )
}

export default AuthStatusDisplay
