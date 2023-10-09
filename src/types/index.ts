export interface IPageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P
  searchParams: Q
}

export interface IPhoto {
  id: string
  name: string
  href: string
  username: string
  imageSrc: string
}
