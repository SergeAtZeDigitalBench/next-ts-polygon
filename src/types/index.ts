export interface IPageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P
  searchParams: Q
}

export interface IContenfulImage {
  metadata: {
    tags: string[]
  }
  sys: {
    space: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    id: string
    type: string
    createdAt: string
    updatedAt: string
    environment: {
      sys: {
        id: string
        type: string
        linkType: string
      }
    }
    revision: number
    locale: string
  }
  fields: {
    title: string
    description: string
    file: {
      url: string
      details: {
        size: number
        image: {
          width: number
          height: number
        }
      }
      fileName: string
      contentType: string
    }
  }
}

export interface IImage {
  id: string
  alt: string
  href: string
  width: number
  height: number
}

export interface IProject {
  id: string
  title: string
  url: string
  image: IImage
}

export interface IHero {
  id: string
  title: string
  text: string
  image: IImage
  pathname: string
}
