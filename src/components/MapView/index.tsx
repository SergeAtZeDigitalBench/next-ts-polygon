import React from 'react'

import { fetchFeatureCollections } from '@/lib'
import { POSTCODE_DISTRICTS_MANCHESTER } from '@/constants'
import OpenLayerMap from './components/OpenLayerMap'
import { MapContextProvider } from '../../providers/MapContextProvider'

const MapView = async () => {
  const [geoJson, error] = await fetchFeatureCollections(
    ...POSTCODE_DISTRICTS_MANCHESTER
  )

  return (
    <div>
      {error && (
        <p className=" my-4 text-center text-red-700 font-bold">{error}</p>
      )}
      <MapContextProvider initialGeoJson={geoJson}>
        <OpenLayerMap />
      </MapContextProvider>
    </div>
  )
}

export default MapView
