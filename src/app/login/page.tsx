import Link from 'next/link'

import LoginForm from '@/components/LoginForm'

const LoginPage = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Login</h1>
      <div className="my-2 p-4 flex justify-end">
        <Link href="/register" className="font-semibold underline text-lg">
          I don&rsquo;t have an account. Register.
        </Link>
      </div>
      <LoginForm />
    </>
  )
}

export default LoginPage
