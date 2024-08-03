import type { User } from '@/types'

import { JSON_PH_BASE_URL } from '@/constants'
import List from '@/components/List'
import { fetchData } from '@/libs'

export const LoadUsers = () => (
  <p className="text-center my-4">Loading users...</p>
)

interface Props {
  maxItems?: number
  delay?: number
  isError?: boolean
}

const UsersList = async ({ maxItems = -1, delay = 1000, isError }: Props) => {
  const [users, fetchError] = await fetchData<User[]>({
    url: `${JSON_PH_BASE_URL}/users?_limit=${maxItems}&_delay=${delay}`,
    isError,
    errorMessage: 'Failed to fetch users',
  })

  if (fetchError || !users) {
    return <p className=" text-red-700 text-center my-4">{fetchError}</p>
  }

  return (
    <List
      data={users}
      getKey={(user) => user.id}
      liClassName="row-span-5"
      renderItem={(user) => (
        <div className="grid grid-rows-subgrid row-span-5">
          <h4 className="text-lg font-semibold my-2 capitalize">{user.name}</h4>
          <p className=" text-sm">{user.username}</p>
          <p className=" text-sm">{user.company.name}</p>
          <p className=" text-sm">{user.email}</p>
          <p className=" text-sm">{user.website}</p>
        </div>
      )}
    />
  )
}

export default UsersList
