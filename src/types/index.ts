export interface IPageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P
  searchParams: Q
}

export type IServerActionResult = { message?: 'ok'; error?: string }

export interface ITodo {
  id: string
  createdAt: Date
  completed: boolean
  title: string
}
