import { redirect } from 'next/navigation'

import { auth } from '@/lib/auth'

const AccountPage = async () => {
  const session = await auth()

  if (!session) {
    return redirect('/')
  }
  return (
    <div className="h-[60vh] flex flex-col justify-center items-center gap-2">
      <h1 className="text-3xl font-bold underline text-center textGradient">
        Account
      </h1>
      <h2 className="text-2xl font-bold text-center textGradient">
        {session.user?.email}
      </h2>
    </div>
  )
}

export default AccountPage
