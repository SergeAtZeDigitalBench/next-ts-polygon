import { z } from 'zod'

import { regitrationSchema } from '@/lib/schemas/registration'
export interface IPageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P
  searchParams: Q
}

export interface IRegisterResponseError {
  first?: string[] | undefined
  last?: string[] | undefined
  email?: string[] | undefined
}

export type FormValues = z.infer<typeof regitrationSchema>

export interface IServerActionResponse {
  error: null | IRegisterResponseError
  data: null | FormValues
}
