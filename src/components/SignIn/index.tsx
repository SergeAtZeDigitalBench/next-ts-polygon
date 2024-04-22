import { signIn } from '@/lib/auth'

const SignIn = (): JSX.Element => {
  return (
    <form
      action={async (formData) => {
        'use server'
        await signIn('credentials', formData)
      }}
      className="max-w-xl mx-auto flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="em" className=" font-semibold text-sm underline">
          Email
        </label>

        <input
          name="email"
          id="em"
          type="email"
          className="px-2 py-1 border border-slate-200 rounded-lg"
          autoComplete="username"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="pw" className=" font-semibold text-sm underline">
          Password
        </label>
        <input
          name="password"
          id="pw"
          type="password"
          className="px-2 py-1 border border-slate-200 rounded-lg"
          autoComplete="current-password"
        />
      </div>
      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="px-2 py-1 rounded-lg bg-green-600 hover:bg-green-700 active:bg-green-800 text-white text-center"
        >
          Sign In
        </button>
      </div>
    </form>
  )
}

export default SignIn
