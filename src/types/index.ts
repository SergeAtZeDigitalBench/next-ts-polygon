export interface IPageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P
  searchParams: Q
}

export interface IProduct {
  id: string
  name: string
  price: string
  material: string
  description: string
  color: string
}

export interface IUser {
  name: string
  email: string
}
