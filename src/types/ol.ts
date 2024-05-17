import type LayerRenderer from 'ol/renderer/Layer'
import type { FeatureLike } from 'ol/Feature'
import type { SimpleGeometry } from 'ol/geom'
import type { Source } from 'ol/source'
import type { Layer } from 'ol/layer'
import type { Map } from 'ol'

export type IyaNoticeAbstractSchema = {
  fn_id: string
  type: string
  iid: string
  publishedTime: Date
  published: string
  lastModifiedTime: Date
  fullname: string
  location_name: string
  notice_url: string
  publication: string
  notice_text: string
  category: string
  location: {
    type: string
    coordinates: number[]
  }
  createdAt?: string
  updatedAt?: Date
  itemstoreIid?: string
  photo_url?: string
  status?: string
  versionId?: string
  update_timestamp?: string
  donation?: boolean | undefined
}

export interface ApiErrorResponse {
  statusCode: number
  error: string
  message: string
}

export interface Feature {
  type: string
  geometry: {
    type: string
    coordinates: [number, number][][]
  }
  properties: {
    name: string
  }
}

export interface FeatureCollection<F = Feature> {
  type: string
  features: F[]
}

export interface ParsedNotice
  extends Omit<
    IyaNoticeAbstractSchema,
    'publishedTime' | 'lastModifiedTime' | 'createdAt' | 'updatedAt'
  > {
  _id: string
  publishedTime: string
  lastModifiedTime: string
  createdAt?: string
  updatedAt?: string
}
export interface FetchState<D> {
  data: D | null
  isLoading: boolean
  error: string | null
}

export interface SelectedMapRegion {
  feature: FeatureLike
  layer: Layer<Source, LayerRenderer<any>>
  geometry: SimpleGeometry
}

export interface MapContextState {
  map: Map | null
  geoJson: FetchState<FeatureCollection>
  center: number[]
  selectedMapRegion: SelectedMapRegion | null
  regionNotices: FetchState<ParsedNotice[]>
  focusedNoticesIds: string[]
  selectedNotice: ParsedNotice | null
}
