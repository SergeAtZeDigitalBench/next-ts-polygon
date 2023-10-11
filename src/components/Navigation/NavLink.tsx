'use client'

import React from 'react'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

interface IProps extends LinkProps {
  children: React.ReactNode
  className: string
}

const NavLink = ({
  children,
  className,
  href,
  ...restLinkProps
}: IProps): JSX.Element => {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={`${
        href === pathname ? ' text-green-800 underline' : ' text-gray-800'
      } ${className}`}
      {...restLinkProps}
    >
      {children}
    </Link>
  )
}

export default NavLink
