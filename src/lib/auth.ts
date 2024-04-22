import NextAuth, { type NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { verifyUser, signInSchema } from './users'

const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const { email, password } = signInSchema.parse(credentials)

          const user = await verifyUser({ email, password })
          return user
        } catch (error) {
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: '/sign-in',
    signOut: '/',
  },
}

export const { handlers, signIn, signOut, auth } = NextAuth((request) => {
  //  if (request) {
  //    // do something with the request
  //  }
  return authConfig
})
