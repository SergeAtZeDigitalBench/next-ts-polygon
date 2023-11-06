'use client'

import { useState } from 'react'

import UserForm from '@/components/UserForm'
import UsersList from '@/components/UsersList'
import { IUser } from '@/types'

const Users = (): JSX.Element => {
  const [users, setUsers] = useState<IUser[]>([])

  const onUserAdd = (user: IUser) => {
    setUsers([...users, user])
  }

  return (
    <div className="h-screen" data-testid="Users">
      <UserForm onUserAdd={onUserAdd} />
      <div className="my-4">
        <UsersList users={users} />
      </div>
    </div>
  )
}

export default Users
