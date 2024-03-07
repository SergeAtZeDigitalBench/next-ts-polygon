import { z } from 'zod'

import {
  regitrationSchema,
  regitrationSchemaZipcode,
} from '@/lib/schemas/registration'
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
  zipCode?: string[] | undefined
}

export type FormValues = z.infer<typeof regitrationSchema>

export type FormValuesZip = z.infer<typeof regitrationSchemaZipcode>

export interface IServerActionResponse<F = FormValues> {
  error: null | IRegisterResponseError
  data: null | F
}
