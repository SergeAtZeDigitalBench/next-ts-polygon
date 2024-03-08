import type { IContenfulImage, IImage } from '@/types'

export const getEnvVar = (key: string): string => {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Env variable "${key}" not set.`)
  }

  return value
}

export const formatImage = (cmsImg: IContenfulImage): IImage => ({
  id: cmsImg.sys.id,
  alt: cmsImg.fields.title,
  href: `https:${cmsImg.fields.file.url}`,
  width: cmsImg.fields.file.details.image.width,
  height: cmsImg.fields.file.details.image.height,
})

export const getErrorMessage = (
  error: unknown,
  defaultMesssage?: string
): string => {
  const messsage =
    error instanceof Error
      ? error.message
      : defaultMesssage || (error as any).toString()

  return messsage
}
