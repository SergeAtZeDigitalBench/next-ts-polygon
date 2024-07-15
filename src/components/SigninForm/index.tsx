'use client'

import { useFormState } from 'react-dom'
import { Input } from '@nextui-org/react'
import Link from 'next/link'

import { signInUser } from '@/lib/actions/auth'
import SubmitButton from '@/components/SubmitButton'

const initState: { message: null | string } = {
  message: null,
}

const SigninForm = () => {
  const [formState, action] = useFormState(signInUser, initState)

  return (
    <form
      action={action}
      className="bg-content1 border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 "
    >
      <h3 className="my-4">Sign in</h3>
      <Input
        fullWidth
        required
        size="lg"
        placeholder="Email"
        name="email"
        type="email"
      />
      <Input
        name="password"
        fullWidth
        required
        size="lg"
        type="password"
        placeholder="Password"
      />

      <SubmitButton>sign in</SubmitButton>
      <div>
        <Link href="/signup">{`Don't have an account?`}</Link>
      </div>
      {formState.message && (
        <p className="my-2 font-semibold text-center text-red-600">
          {formState.message}
        </p>
      )}
    </form>
  )
}

export default SigninForm
