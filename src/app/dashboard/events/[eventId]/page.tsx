import { redirect } from 'next/navigation'

import type { PageProps } from '@/types'

import { getCurrentUser } from '@/lib/users'
import { getOneEvent } from '@/lib/events'

const EventDetailsPage = async ({ params }: PageProps<{ eventId: string }>) => {
  const user = await getCurrentUser()
  const event = await getOneEvent(user.id, params.eventId)

  if (!event) redirect('/dashboard/events')

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-4">
        {event.name}
      </h1>
    </>
  )
}

export default EventDetailsPage
