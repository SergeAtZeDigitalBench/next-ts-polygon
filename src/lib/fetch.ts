export const fetchJson = async <D = any>(
  url: string,
  options?: RequestInit
): Promise<[D, null] | [null, string]> => {
  try {
    const res = await fetch(url, options)
    if (!res.ok) {
      throw new Error(res.statusText)
    }

    const data: D = await res.json()
    return [data, null]
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Failed to fetch'
    return [null, error]
  }
}

export const handleAsync = async <D = any>(
  asyncFn: () => Promise<D>
): Promise<[D, null] | [null, string]> => {
  try {
    const data = await asyncFn()
    return [data, null]
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Failed to fetch'
    return [null, error]
  }
}
