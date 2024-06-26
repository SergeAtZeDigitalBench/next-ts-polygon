'use client'

import {
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  type RefObject,
  useState,
  useContext,
  createContext,
  useEffect,
  useRef,
} from 'react'
import Map from 'ol/Map'
import 'ol/ol.css'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer'
import { OSM, Vector as VectorSource, OGCMapTile } from 'ol/source'
import GeoJSON from 'ol/format/GeoJSON'
import { Feature, View } from 'ol'

import {
  FeatureCollection,
  Feature as FeatureType,
  SelectedMapRegion,
} from '@/types'

import {
  MANCHESTER_CENTER,
  WEB_MERCATOR_COORDINATE_SYSTEM_ID,
} from '@/constants'
import { vectorPolygonStyle, markerPointerStyle } from '@/lib/ol'
import { Point } from 'ol/geom'
import { fromLonLat } from 'ol/proj'

type Store = { map: Map | null; selectedRegion: SelectedMapRegion | null }
type ContextType = {
  store: Store
  setStore: Dispatch<SetStateAction<Store>>
  mapTargetElementRef: RefObject<HTMLDivElement>
}

const MapContext = createContext<ContextType | null>(null)

type Props = {
  children: ReactNode
  initialGeoJson: FeatureCollection<FeatureType> | null
}

export const MapContextProvider = ({
  children,
  initialGeoJson,
}: Props): JSX.Element => {
  const [store, setStore] = useState<Store>({ map: null, selectedRegion: null })
  const mapTargetElementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const osmBaseLayer = new TileLayer({
      source: new OSM(),
    })

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [...new GeoJSON().readFeatures(initialGeoJson)],
      }),
      style: [vectorPolygonStyle],
    })

    const markerFeat = new Feature({
      geometry: new Point(fromLonLat(MANCHESTER_CENTER)),
    })

    markerFeat.setStyle(markerPointerStyle)

    const markersLayer = new VectorLayer({
      source: new VectorSource({
        features: [markerFeat],
        format: new GeoJSON(),
      }),
    })

    const initialView = new View({
      projection: WEB_MERCATOR_COORDINATE_SYSTEM_ID,
      center: MANCHESTER_CENTER,
      zoom: 11,
      minZoom: 0,
      maxZoom: 28,
    })

    const mapInstance = new Map({
      layers: [
        osmBaseLayer,
        // vectorLayer,
        markersLayer,
      ],
      view: initialView,
    })

    mapInstance.setTarget(mapTargetElementRef.current || '')
    setStore((current) => ({ ...current, map: mapInstance }))

    return () => {
      mapInstance.setTarget()
    }
  }, [initialGeoJson])

  return (
    <MapContext.Provider value={{ store, setStore, mapTargetElementRef }}>
      {children}
    </MapContext.Provider>
  )
}

export const useMapContext = () => {
  const ctx = useContext(MapContext)

  if (!ctx) {
    throw new Error(
      "No MapContext found. Check your MapContextProvider's scope"
    )
  }

  return ctx
}
