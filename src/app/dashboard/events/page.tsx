import Link from 'next/link'

import { getAllEvents } from '@/lib/events'
import { getCurrentUser } from '@/lib/users'

const EventsPage = async () => {
  const user = await getCurrentUser()
  const events = await getAllEvents(user.id)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link href={`/dashboard/events/${event.id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default EventsPage
