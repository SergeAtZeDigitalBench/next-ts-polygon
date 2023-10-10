import { fetchJSONPlaceholderData } from '@/lib/fetch'
import { IUser } from '@/types'

const UsersList = async () => {
  const users = await fetchJSONPlaceholderData<IUser[]>('/users')

  return (
    <ul className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {users &&
        users.slice(0, 6).map(({ id, name, email }) => (
          <li
            key={id}
            className="flex flex-col gap-2 justify-center items-center h-64 bg-purple-700 hover:bg-purple-700/90 text-green-500 rounded-xl "
          >
            <span className="text-xl font-semibold">{name}</span>
            <span>{email}</span>
          </li>
        ))}
    </ul>
  )
}

export default UsersList
