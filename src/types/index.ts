export interface IPageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P
  searchParams: Q
}

export interface ITodoDb {
  id: string
  createdAt: Date
  updatedAt: Date
  title: string
  isComplete: boolean
}

export interface ITodo {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  isComplete: boolean
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
