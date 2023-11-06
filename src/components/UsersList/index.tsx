'use client'

import { IUser } from '@/types'

interface IProps {
  users: IUser[]
}

const UsersList = ({ users }: IProps): JSX.Element => {
  const renderedUsers = users.map((user) => {
    return (
      <tr key={user.name}>
        <td className="border-x border-x-green-700 px-2">{user.name}</td>
        <td className="border-x border-x-green-700 px-2">{user.email}</td>
      </tr>
    )
  })

  if (users.length === 0) {
    return (
      <p data-testid="UsersList" className="ml-4 font-semibold text-green-700">
        No users
      </p>
    )
  }

  return (
    <table
      data-testid="UsersList"
      className="p-2 bg-green-50 border border-green-700"
    >
      <thead>
        <tr>
          <th className="border-x border-x-green-700 px-2">Name</th>
          <th className="border-x border-x-green-700 px-2">Email</th>
        </tr>
      </thead>
      <tbody className="border border-green-700" data-testid="UsersList_tbody">
        {renderedUsers}
      </tbody>
    </table>
  )
}

export default UsersList
