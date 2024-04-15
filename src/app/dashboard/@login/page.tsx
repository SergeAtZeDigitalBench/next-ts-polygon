import { wait } from '@/lib'

const LoginPage = async () => {
  await wait(300)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-4">
        Login Page
      </h1>
    </>
  )
}

export default LoginPage
