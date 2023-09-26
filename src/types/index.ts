export interface IPageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P;
  searchParams: Q;
}

export interface ITodo {
  id: string;
  text: string;
}

export interface IServerActionResponse {
  error?: string;
  message?: string;
}
