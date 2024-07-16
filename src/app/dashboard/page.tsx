import { getCurrentUser } from '@/lib/users'
import { getAttendeesCountForDashboard } from '@/lib/attendees'

const DashboardPage = async () => {
  const user = await getCurrentUser()
  const attendeesCount = await getAttendeesCountForDashboard(user.id)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Dashboard Home
      </h1>
      <p className="my-2 text-center">Total attendees: {attendeesCount}</p>
    </>
  )
}

export default DashboardPage
