export interface IPageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P
  searchParams: Q
}

export * from './ol'
