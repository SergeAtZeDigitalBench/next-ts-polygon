import Link from 'next/link'

import { navLinks } from '@/constants'

const Navigation = (): JSX.Element => {
  return (
    <nav className="flex gap-2 justify-center py-4">
      {navLinks.map(({ id, href, name }) => (
        <Link key={id} href={href} className="px-4 py-2">
          {name}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
