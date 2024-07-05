export interface IPageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P
  searchParams: Q
}

export type Article = {
  id: string
  title: string
  description: string
  image: {
    url: string
    alt: string
  }
}
