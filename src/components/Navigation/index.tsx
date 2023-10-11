import { navLinks } from '@/constants'
import NavLink from './NavLink'

const Navigation = (): JSX.Element => {
  return (
    <nav className="flex gap-2 justify-center py-4">
      {navLinks.map(({ id, href, name }) => (
        <NavLink
          key={id}
          href={href}
          className="px-4 py-2 hover:text-green-800"
        >
          {name}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navigation
