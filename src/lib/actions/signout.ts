'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { COOKIE_NAME } from '@/constants'

export const signOut = async () => {
  cookies().delete(COOKIE_NAME)
  redirect('/signin')
}
