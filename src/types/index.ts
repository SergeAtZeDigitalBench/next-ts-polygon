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
