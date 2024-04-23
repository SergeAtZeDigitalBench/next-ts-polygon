'use client'

import { useState, useRef, MouseEvent } from 'react'
import Link from 'next/link'
import Map, {
  NavigationControl,
  GeolocateControl,
  Popup,
  Marker,
} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { IoMdAirplane } from 'react-icons/io'

import airports from '@/data/airports.json'

type Airport = (typeof airports)[number]
type MarkerType = { airport: Airport; index: number }

const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const MapView = (): JSX.Element => {
  const [selectedMarker, setSelectedMarker] = useState<null | MarkerType>(null)
  const mapRef = useRef<any>(null)

  const handleSelect = (
    event: MouseEvent<HTMLButtonElement>,
    airport: Airport,
    index: number
  ) => {
    event.stopPropagation()
    setSelectedMarker({ airport, index })
    mapRef.current?.flyTo({ center: [airport.lon, airport.lat], zoom: 10 })
  }

  return (
    <div className="h-[50vh] w-[90vw] mx-auto">
      <Map
        ref={mapRef}
        mapboxAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        initialViewState={{
          latitude: 35.668641,
          longitude: 139.750567,
          zoom: 10,
        }}
        maxZoom={20}
        minZoom={3}
      >
        <GeolocateControl position="top-left" />
        <NavigationControl position="top-left" />
        {airports.map((airport, index) => (
          <Marker
            key={airport.code}
            longitude={+airport.lon}
            latitude={+airport.lat}
          >
            <button onClick={(e) => handleSelect(e, airport, index)}>
              {<IoMdAirplane size={30} color="tomato" />}
            </button>
          </Marker>
        ))}

        {!!selectedMarker && (
          <Popup
            offset={25}
            latitude={+selectedMarker.airport.lat}
            longitude={+selectedMarker.airport.lon}
            onClose={() => {
              setSelectedMarker(null)
            }}
            closeButton={false}
          >
            <div className="text-slate-900">
              <h3 className="">{selectedMarker.airport.name}</h3>
              <div className="">
                <label className="">Code: </label>
                <span>{selectedMarker.airport.code}</span>
                <br />
                <label className="">Country: </label>
                <span>{selectedMarker.airport.country}</span>
                <br />
                <label className="">Website: </label>
                <a
                  href={
                    selectedMarker.airport.url === ''
                      ? '#'
                      : selectedMarker.airport.url
                  }
                  target={
                    selectedMarker.airport.url === '' ? undefined : '_blank'
                  }
                  className=""
                >
                  {selectedMarker.airport.url === ''
                    ? 'Nil'
                    : selectedMarker.airport.url}
                </a>
              </div>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  )
}

export default MapView
