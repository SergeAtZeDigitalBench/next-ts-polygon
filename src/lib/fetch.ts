export const fetchJsonData = async <D = unknown>(
  url: string,
  options?: RequestInit
): Promise<[D, null] | [null, string]> => {
  try {
    const res = await fetch(url, options)
    if (!res.ok) {
      throw new Error(res.statusText || 'Request failed')
    }

    const data: D = await res.json()
    return [data, null]
  } catch (error) {
    const msg: string =
      error instanceof Error ? error.message : (error as any).ToString()

    return [null, msg]
  }
}

export const notifySocketServer = async (pathName: string) => {
  const url = `${process.env.NEXT_PUBLIC_SOCKET_IO_SERVER}/refresh-page?pathname=${pathName}`

  return fetchJsonData<{ message: string }>(url)
}
