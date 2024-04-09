'use client'

import { useState, useEffect } from 'react'

import { getErrorMessage } from '@/lib/common'

type Props = {
  initialPets?: string[] | null
}

const PetsList = ({ initialPets }: Props): JSX.Element => {
  const [error, setError] = useState<null | string>(null)
  const [isLoading, setisLoading] = useState<boolean>(false)
  const [pets, setPets] = useState<string[]>(() => initialPets || [])

  useEffect(() => {
    let isMounted = true
    const fetchPets = async () => {
      try {
        setisLoading(true)
        setError(null)
        const res = await fetch('https://api.example.com/pets', {
          method: 'GET',
        })

        if (!res.ok) {
          const message = await res.json()

          throw new Error(message?.error || res.statusText)
        }

        const payload = (await res.json()) as { data: string[] }

        isMounted && setPets(payload.data)
      } catch (error) {
        isMounted && setError(getErrorMessage(error))
      } finally {
        isMounted && setisLoading(false)
      }
    }
    fetchPets()
    return () => {
      isMounted = false
    }
  }, [])
  return (
    <>
      <ul className=" list-disc pl-4 my-4">
        {pets.map((pet) => {
          return <li key={pet}>{pet}</li>
        })}
      </ul>
      {isLoading && (
        <p className="text-center text-sm  my-2 font-semibold text-green-700">
          loading...
        </p>
      )}
      {error && (
        <p className="text-center text-sm my-2 font-semibold text-red-700">
          {error}
        </p>
      )}
    </>
  )
}

export default PetsList
