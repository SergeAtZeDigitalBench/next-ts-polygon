import Link from 'next/link'
import { Chip, ChipProps } from '@nextui-org/react'

import { getCurrentUser } from '@/lib/users'
import { getEventsForDashboard } from '@/lib/events'

const statusColors = {
  draft: 'warning',
  live: 'success',
  started: 'primary',
  ended: 'disabled',
  canceled: 'danger',
} as unknown as Record<string, ChipProps['color']>

const EventsPage = async () => {
  const user = await getCurrentUser()
  const events = await getEventsForDashboard(user.id)

  return (
    <div className="w-full h-full p-4 flex justify-center">
      <div className="w-full">
        <h2 className="text-center text-xl">Latest Events</h2>
        <div className="rounded-md border border-default-100 my-8">
          {events.map((event) => (
            <div key={event.id}>
              <Link
                href={`/dashboard/events/${event.id}`}
                className="border-b border-default-100 p-2 flex gap-2 hover:opacity-50"
              >
                <span>{event.name}</span>

                <span>
                  <Chip size="sm" color={statusColors[event.status]}>
                    {event.status}
                  </Chip>
                </span>
                <span>
                  <Chip size="sm" variant="faded">
                    {event.name}
                  </Chip>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventsPage
