const DEFAULT_ERROR_MESSAGE = 'Failed to fetch data'

export const fetchData = async <D>({
  url,
  options,
  errorMessage = DEFAULT_ERROR_MESSAGE,
  isError,
}: {
  url: string
  options?: RequestInit
  errorMessage?: string
  isError?: boolean
}): Promise<[D, null] | [null, string]> => {
  try {
    const res = await fetch(url, options)

    if (isError) {
      throw new Error(errorMessage)
    }

    if (!res.ok) {
      const errorResponse = `${errorMessage}. Status : ${res.status}. ${res.statusText}`
      throw new Error(errorResponse)
    }

    const data: D = await res.json()
    return [data, null]
  } catch (error) {
    const message = error instanceof Error ? error.message : errorMessage
    return [null, message]
  }
}
