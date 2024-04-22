import NextAuth, { type NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { verifyUser } from './users'

const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize({ email, password }) {
        if (typeof email !== 'string' || typeof password !== 'string') {
          throw new Error('Missing credentials')
        }

        const user = await verifyUser({ email, password })
        return user
      },
    }),
  ],
}

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig)
