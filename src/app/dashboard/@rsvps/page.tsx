import Link from 'next/link'
import { Chip, ChipProps } from '@nextui-org/react'

import { getCurrentUser } from '@/lib/users'
import { getRsvpsForDashboard } from '@/lib/rsvps'

const statusColors = {
  going: 'primary',
  maybe: 'warning',
  'not-going': 'danger',
} as unknown as Record<string, ChipProps['color']>

const RsvpsPage = async () => {
  const user = await getCurrentUser()
  const rsvpsList = await getRsvpsForDashboard(user.id)

  return (
    <div className="w-full h-full p-4 flex justify-center">
      <div className="w-full">
        <h2 className="text-center text-xl">{`RSVPs`}</h2>
        <div className="rounded-md border border-default-100 my-8">
          {rsvpsList.map(({ rsvps, events, attendees }) => (
            <div key={rsvps?.id} className="">
              <Link
                href={`/dashboard/events/${events?.id}`}
                className="border-b border-default-100 p-2 flex gap-2 hover:opacity-50"
              >
                <span>{attendees.name}</span>
                <span>
                  <Chip
                    size="sm"
                    color={
                      rsvps?.status ? statusColors[rsvps.status] : undefined
                    }
                  >
                    {rsvps?.status}
                  </Chip>
                </span>
                <Chip size="sm" variant="faded">
                  {events?.name}
                </Chip>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RsvpsPage
