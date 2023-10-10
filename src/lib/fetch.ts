import { ImagesResults, ImagesSchemaWithPhotos } from '@/models/images'
import { BLUR_DATA_URL } from '@/constants/blurDataUrl'
import { getRandomFromArray } from './commmon'
import { env } from '@/constants/env'

export const fetchImages = async (
  url: string,
  options?: RequestInit
): Promise<ImagesResults | undefined> => {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        ...options?.headers,
        Authorization: env.PEXELS_API_KEY,
      },
    })
    if (!res.ok) {
      throw new Error(res.statusText || 'Fetch images error')
    }

    const imagesResults: ImagesResults = await res.json()

    const parsedData = ImagesSchemaWithPhotos.parse(imagesResults)

    if (parsedData.total_results === 0) return

    return {
      ...parsedData,
      photos: parsedData.photos.map((current) => ({
        ...current,
        blurredDataUrl: getRandomFromArray(BLUR_DATA_URL),
      })),
    }
  } catch (error) {
    console.log('Error: ', error)
    return
  }
}

export const fetchJSONPlaceholderData = async <D = any>(
  endpoint: string,
  options?: RequestInit
) => {
  try {
    const res = await fetch(`${env.JSON_PLACEHOLDER_API}${endpoint}`, options)
    if (!res.ok) {
      throw new Error(res.statusText || 'Fetch data error')
    }

    const data: D = await res.json()
    return data
  } catch (error) {
    console.log('Error: ', error)
    return
  }
}
