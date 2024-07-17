'use server'

import randomName from '@scaleway/random-name'
import { revalidateTag } from 'next/cache'

import { getCurrentUser } from '@/lib/users'
import { events } from '@/lib/db/schema'
import { delay } from '@/lib/common'
import { db } from '@/lib/db'

export const createNewEvent = async () => {
  await delay(2000)

  const user = await getCurrentUser()

  await db.insert(events).values({
    startOn: new Date().toUTCString(),
    createdById: user.id,
    isPrivate: false,
    name: randomName('event', ' '),
  })

  revalidateTag('dashboard:events')
}
