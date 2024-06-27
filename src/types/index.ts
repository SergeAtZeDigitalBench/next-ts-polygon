export { type Todo } from '@prisma/client'

export interface PageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P
  searchParams: Q
}

export type ServerActionResult<D = any> = {
  message?: 'ok'
  data?: D | null
  error?: string
}
