import Link from 'next/link'

const navLinks = [
  { id: 1, href: '/meals', title: 'Browse Meals' },
  { id: 2, href: '/community', title: 'Foodies Community' },
]

interface IProps {}

const Navigation = ({}: IProps): JSX.Element => {
  return (
    <nav>
      <ul className="flex gap-2 justify-center items-center text-white font-semibold my-4 font-montserrat">
        {navLinks.map(({ id, href, title }) => (
          <li key={id}>
            <Link href={href} className="navLink">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
