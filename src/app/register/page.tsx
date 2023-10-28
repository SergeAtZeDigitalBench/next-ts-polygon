import Link from 'next/link'

import RegisterForm from '@/components/RegisterForm'

const Page = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center mb-4">
        Register
      </h1>
      <div className="my-2 p-4 flex justify-end">
        <Link href="/login" className="font-semibold underline text-lg">
          I already have an account. Login
        </Link>
      </div>
      <RegisterForm />
    </>
  )
}

export default Page
