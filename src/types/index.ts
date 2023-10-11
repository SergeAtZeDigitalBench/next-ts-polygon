export interface IPageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P
  searchParams: Q
}

export type IServerActionResult = { message: 'ok' } | { error: string }
