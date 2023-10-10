import React from 'react'

import { IPageProps } from '@/types'
import UsersList from '@/components/UsersList'

const UsersPage = async ({ params, searchParams }: IPageProps) => {
  return (
    <>
      <h1 className="text-2xl font-bold underline text-center">Users</h1>
      {/* @ts-ignore server component */}
      <UsersList />
    </>
  )
}

export default UsersPage
