export interface IPageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P
  searchParams: Q
}

export interface IBlogpostDb {
  id: string
  createdAt: Date
  updatedAt: Date
  title: string
  body: string
}

export interface IBlogpost {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  body: string
}

export interface IServerActionResponse {
  error?: string
  message?: string
}
