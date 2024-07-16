import { getCurrentUser } from '@/lib/users'
import { getAttendeesCountForDashboard } from '@/lib/attendees'

const DashboardPage = async () => {
  const user = await getCurrentUser()
  const attendeesCount = await getAttendeesCountForDashboard(user.id)

  return (
    <div className="w-full flex h-full justify-center items-center">
      <div>
        <h4 className="text-lg">Attendees</h4>
        <h2 className="text-6xl font-semibold my-8 text-center">
          {attendeesCount}
        </h2>
      </div>
    </div>
  )
}

export default DashboardPage
