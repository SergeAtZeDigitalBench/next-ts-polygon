import Link from 'next/link'

const navLinks = [
  { id: 1, href: '/', title: 'home' },
  //   { id: 2, href: '/parallel-routes', title: 'parallel routes' },
]
const Navigation = (): JSX.Element => {
  return (
    <ul className="flex justify-center items-center gap-2">
      {navLinks.map(({ id, title, href }) => (
        <li key={id}>
          <Link
            href={href}
            className="font-semibold text-gray-900 hover:text-gray-950"
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
