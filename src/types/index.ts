export interface IPageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P
  searchParams: Q
}

export interface IUser {
  name: string
  email: string
}
