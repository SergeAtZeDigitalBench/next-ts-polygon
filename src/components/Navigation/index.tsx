import React from 'react'
import Link from 'next/link'

import { navLinks } from '@/constants'
import NavLink from './NavLink'

interface IProps {
  [x: string]: unknown
}

const Navigation = ({}: IProps): JSX.Element => {
  return (
    <nav className="flex flex-wrap gap-2 justify-center py-4">
      {navLinks.map(({ id, href, name }) => (
        <NavLink key={id} href={href} className="px-4 py-2">
          {name}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navigation
