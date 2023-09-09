export interface ISource {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}

export interface IImage {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: ISource;
  liked: boolean;
  alt: string;
}

export interface IListResponse {
  page: number;
  per_page: number;
  photos: IImage[];
  next_page: string;
}

export interface ISearchResponse extends IListResponse {
  total_results: number;
}
export interface IPageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P;
  searchParams: Q;
}
