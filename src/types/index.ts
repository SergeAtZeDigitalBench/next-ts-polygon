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

export interface IServerActionResponse {
  error?: string
  message?: string
}
