import React from 'react'
import Link from 'next/link'

import { navLinks } from '@/constants'

interface IProps {
  [x: string]: unknown
}

const Navigation = ({}: IProps): JSX.Element => {
  return (
    <nav role="navigation" className="flex gap-2 justify-center py-4">
      {navLinks.map(({ id, href, name }) => (
        <Link key={id} href={href} className="px-4 py-2">
          {name}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
