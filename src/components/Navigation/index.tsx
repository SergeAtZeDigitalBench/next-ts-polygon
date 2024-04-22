import React from 'react'
import Link from 'next/link'

import SignOut from '@/components/SignOut'
import { navLinks } from '@/constants'
import { auth } from '@/lib/auth'

const Navigation = async () => {
  const session = await auth()

  return (
    <nav className=" max-w-5xl mx-auto flex gap-2 justify-center items-center py-4">
      {navLinks.map(({ id, href, name }) => (
        <Link key={id} href={href} className="px-4 py-2">
          {name}
        </Link>
      ))}
      {session ? (
        <>
          <Link href="/private/account">account</Link>
          <SignOut />
        </>
      ) : (
        <Link href="/sign-in" className="ml-auto">
          sign in
        </Link>
      )}
    </nav>
  )
}

export default Navigation
