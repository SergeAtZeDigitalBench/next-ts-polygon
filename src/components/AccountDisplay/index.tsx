'use client'

import { useRouter } from 'next/navigation'

import { useAuthContext } from '@/context/AuthContext'

const AccountDisplay = (): JSX.Element | null => {
  const router = useRouter()
  const { user, setUser } = useAuthContext()

  if (!user) {
    router.push('/')
  }

  return (
    <div className="max-w-sm mx-auto my-4 p-2 flex flex-col justify-center items-center gap-2 rounded bg-orange-400">
      <h2 className="text-2xl font-bold underline text-center">Welcome!</h2>
      <p>You are curretnly logged in as {user?.name || ''}</p>
      <p>Your accouunt email is {user?.email || ''}</p>
      <button
        onClick={() => {
          router.push('/')
          setUser(null)
        }}
        className="px-2 py-1 rounded bg-green-600 border border-green-900 hover:bg-green-700 text-white min-w-[100px]"
      >
        Logout{' '}
      </button>
    </div>
  )
}

export default AccountDisplay
