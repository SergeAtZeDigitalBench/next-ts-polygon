export const fetchJson = async <D = any>(
  url: string,
  options?: RequestInit
): Promise<[D, null] | [null, string]> => {
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      credentials: 'include',
      ...options,
    })

    if (!res.ok) {
      throw new Error(res.statusText || 'Request failed')
    }

    const data: D = await res.json()
    return [data, null]
  } catch (error) {
    const msg: string =
      error instanceof Error ? error.message : 'Request failed'

    return [null, msg]
  }
}
