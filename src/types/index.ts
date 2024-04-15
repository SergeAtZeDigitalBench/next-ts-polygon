export type PageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> = {
  params: P
  searchParams: Q
}

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}
