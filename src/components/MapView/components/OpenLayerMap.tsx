'use client'

import { useEffect } from 'react'
import { useMapContext } from '@/providers/MapContextProvider'
import { MapBrowserEvent, Feature } from 'ol'
import { Point } from 'ol/geom'
import { fromLonLat } from 'ol/proj'

import { interactionOnClick, markerPointerStyle } from '@/lib/ol'
import VectorSource from 'ol/source/Vector'

type MapEvent = MapBrowserEvent<any>
type Listener = (event: MapEvent) => unknown

const useInteraction = () => {
  const { store, setStore } = useMapContext()

  const { map, selectedRegion } = store

  useEffect(() => {
    if (!map) return

    const handleMapClick: Listener = (event) => {
      setStore((current) => ({
        ...current,
        selectedRegion: null,
      }))

      map.forEachFeatureAtPixel(event.pixel, (feature, layer, geometry) => {
        setStore((current) => ({
          ...current,
          selectedRegion: { feature, layer, geometry },
        }))
      })
    }
    map.addEventListener('click', handleMapClick as any)

    map.addInteraction(interactionOnClick)
    return () => {
      map.removeInteraction(interactionOnClick)
      map.removeEventListener('click', handleMapClick as any)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map])

  /**
   * @description effect to zoom into selected postcode region
   */
  useEffect(() => {
    if (!selectedRegion || !map) return

    const { geometry } = selectedRegion
    const currentView = map.getView()

    currentView.fit(geometry.getExtent(), {
      duration: 250,
      maxZoom: 15,
    })
  }, [selectedRegion, map])

  useEffect(() => {
    if (!selectedRegion || !map) return
    const { geometry, layer, feature } = selectedRegion

    const location = geometry.getFirstCoordinate()
    const feat = new Feature({
      geometry: new Point(fromLonLat(location)),
    })
    feat.setStyle(markerPointerStyle)

    // layer.setSource(
    //   new VectorSource({
    //     features: [feature, feat],
    //   })
    // )
  }, [selectedRegion, map])
}

const OpenLayerMap = (): JSX.Element => {
  useInteraction()
  const { mapTargetElementRef } = useMapContext()

  return (
    <div className="grid grid-cols-[60vw_39vw] gap-1">
      <div ref={mapTargetElementRef} className="w-[60vw] h-[75vh]"></div>
      <div>
        <h2 className=" text-2xl font-semibold underline">info:</h2>
      </div>
    </div>
  )
}

export default OpenLayerMap
