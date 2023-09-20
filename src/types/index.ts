export interface IPageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P;
  searchParams: Q;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
}
export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
