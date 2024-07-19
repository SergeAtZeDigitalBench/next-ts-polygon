'use client'

import React, { ComponentProps } from 'react'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

type Props = LinkProps & ComponentProps<'a'>

const NavLink = ({
  href,
  children,
  className,
  ...restLinkProps
}: Props): JSX.Element => {
  const pathname = usePathname()
  const isActive = href === pathname

  return (
    <Link
      href={href}
      className={clsx(className, isActive && 'underline font-semibold')}
      {...restLinkProps}
    >
      {children}
    </Link>
  )
}

export default NavLink
