import { getErrorMessage } from '@/lib/common'

export const getPets = async (): Promise<[string[], null] | [null, string]> => {
  try {
    const res = await fetch('https://api.example.com/pets', {
      method: 'GET',
    })

    if (!res.ok) {
      const message = await res.json()

      throw new Error(message?.error || res.statusText)
    }

    const payload = (await res.json()) as { data: string[] }

    return [payload.data, null]
  } catch (error) {
    return [null, getErrorMessage(error)]
  }
}
