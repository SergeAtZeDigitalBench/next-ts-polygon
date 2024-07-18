import { getGuestList } from '@/lib/attendees'
import { getCurrentUser } from '@/lib/users'

const GuestsPage = async () => {
  const user = await getCurrentUser()
  const guests = await getGuestList(user.id)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Guests</h1>

      <ul>
        {guests.map((guest) => (
          <li key={guest.id}>{guest.name}</li>
        ))}
      </ul>
    </>
  )
}

export default GuestsPage
