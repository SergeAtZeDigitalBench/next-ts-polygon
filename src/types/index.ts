export interface IPageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P;
  searchParams: Q;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
