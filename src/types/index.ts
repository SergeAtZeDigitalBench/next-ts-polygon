export interface PageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P
  searchParams: Q
}

export interface PostFileMetadata {
  title: string
  prep_time: string
  cook_time: string
  description: string
}

export interface PostFileSummary {
  title: string
  prep_time: string
  cook_time: string
  bio: string
  slug: string
}
