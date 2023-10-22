import React from 'react'
import Link from 'next/link'

import { navLinks } from '@/constants'
import SocketConnectStatus from './SocketConnectStatus'

interface IProps {
  [x: string]: unknown
}

const Navigation = ({}: IProps): JSX.Element => {
  return (
    <nav className="flex gap-2 justify-center items-center py-4">
      {navLinks.map(({ id, href, name }) => (
        <Link key={id} href={href} className="px-4 py-2">
          {name}
        </Link>
      ))}
      <SocketConnectStatus />
    </nav>
  )
}

export default Navigation
