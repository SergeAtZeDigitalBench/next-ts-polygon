import { redirect } from 'next/navigation'

import SignIn from '@/components/SignIn'
import { auth } from '@/lib/auth'

const SignInPage = async () => {
  const session = await auth()

  if (session) {
    return redirect('/')
  }

  return (
    <>
      <h1 className=" my-4 text-3xl font-bold underline text-center">
        Sign In
      </h1>
      <SignIn />
    </>
  )
}

export default SignInPage
