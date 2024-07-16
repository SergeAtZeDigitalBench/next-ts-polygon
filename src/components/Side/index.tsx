'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button, cn } from '@nextui-org/react'

import Logo from '@/images/pardy.png'

const links = [
  { route: '/dashboard', name: 'Home' },
  { route: '/dashboard/events', name: 'Events' },
  { route: '/dashboard/guests', name: 'Guests' },
  { route: '/dashboard/activity', name: 'Activity' },
  { route: '/dashboard/settings', name: 'Settings' },
]

const isActive = (pathname: string, route: string) => {
  if (route === '/dashboard') {
    return pathname === '/dashboard'
  }

  return pathname.includes(route)
}

const Side = () => {
  const pathname = usePathname()
  const activeClass = 'bg-primary hover:bg-primary'

  return (
    <div className="w-full h-full px-3 relative">
      <div className="mb-12">
        <figure className="w-[80px] pt-4">
          <Image src={Logo} alt="pardy" />
        </figure>
      </div>
      <div>
        {links.map((link) => (
          <div className="w-full my-2" key={link.route}>
            <Link href={link.route}>
              <div
                className={cn(
                  `w-full h-full py-2 px-2 hover:bg-content1 rounded-lg`,
                  isActive(pathname, link.route) && activeClass
                )}
              >
                {link.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full left-0 px-4">
        <Button fullWidth variant="ghost">
          Sign Out
        </Button>
      </div>
    </div>
  )
}

export default Side
