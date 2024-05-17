import type { ApiErrorResponse, FeatureCollection } from '../types'

const NEXT_PUBLIC_NOTICE_PORTAL_API = process.env.NEXT_PUBLIC_NOTICE_PORTAL_API

const getFullUrl = (postcodes: string[]) => {
  if (!NEXT_PUBLIC_NOTICE_PORTAL_API) {
    throw new Error(
      'Env variable NEXT_PUBLIC_NOTICE_PORTAL_API is not provided'
    )
  }

  return `${NEXT_PUBLIC_NOTICE_PORTAL_API}/outcodes/geo-json?outcodes=${postcodes.join(
    '~'
  )}`
}

export const fetchFeatureCollections = async (
  ...postcodes: string[]
): Promise<[FeatureCollection, null] | [null, string]> => {
  try {
    const url = getFullUrl(postcodes)
    const res = await fetch(url)

    if (!res.ok) {
      const errorResponse = (await res.json()) as Partial<ApiErrorResponse>
      const errorMessage = errorResponse.message || res.statusText

      throw new Error(errorMessage)
    }

    const locationPolygons: FeatureCollection = await res.json()

    return [locationPolygons, null]
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Failed to fetch locations collection'

    return [null, errorMessage]
  }
}
