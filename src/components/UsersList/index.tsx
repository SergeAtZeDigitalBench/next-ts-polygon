import { fetchJSONPlaceholderData } from '@/lib/fetch'
import { IUser } from '@/types'

const UsersList = async () => {
  const users = await fetchJSONPlaceholderData<IUser[]>('/users')

  return (
    <ul className="flex flex-col gap-2">
      {users &&
        users.map(({ id, name, email }) => (
          <li key={id} className="flex flex-col gap-1 w-full">
            <span className="text-xl font-semibold">{name}</span>
            <span>{email}</span>
          </li>
        ))}
    </ul>
  )
}

export default UsersList
