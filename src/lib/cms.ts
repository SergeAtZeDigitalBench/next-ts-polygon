import { createClient } from 'contentful'

import type { IContenfulImage, IHero, IProject } from '@/types'

import { CONTENT } from '@/constants'
import { getEnvVar, formatImage, getErrorMessage } from './common'

export const client = createClient({
  space: getEnvVar('CONTENTFUL_SPACE_ID'),
  accessToken: getEnvVar('CONTENTFUL_API_ACCESS_TOKEN'),
  environment: 'master',
})

export const getProjects = async (): Promise<
  [IProject[], null] | [null, string]
> => {
  try {
    const res = await client.getEntries({
      content_type: CONTENT.PROJECTS,
    })

    const projectList = res.items.map((current) => ({
      ...current.fields,
      id: current.sys.id,
      image: formatImage(current.fields.image as unknown as IContenfulImage),
    })) as IProject[]

    return [projectList, null]
  } catch (error) {
    return [null, getErrorMessage(error)]
  }
}

export const getHeroSection = async (
  pathname: string
): Promise<[IHero, null] | [null, string]> => {
  try {
    const res = await client.getEntries({
      content_type: CONTENT.HERO,
    })

    const found = res.items.find(
      (current) => current.fields.pathname === pathname
    )

    if (!found) {
      throw new Error(`Hero section for '${pathname}' not found`)
    }

    const { sys, fields } = found

    const heroData = {
      ...fields,
      id: sys.id,
      image: formatImage(fields.image as unknown as IContenfulImage),
    } as IHero

    return [heroData, null]
  } catch (error) {
    return [null, getErrorMessage(error)]
  }
}
