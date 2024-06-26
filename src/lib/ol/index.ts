import { Fill, Stroke, Style, Circle } from 'ol/style'
import { Select } from 'ol/interaction'
import { click } from 'ol/events/condition'

export const vectorPolygonStyle = new Style({
  stroke: new Stroke({
    color: 'blue',
    width: 3,
  }),
  fill: new Fill({
    color: 'rgba(0, 0, 255, 0.1)',
  }),
})

export const markerPointerStyle = new Style({
  image: new Circle({
    radius: 10,
    fill: new Fill({ color: 'rgba(255, 0, 0, 0.1)' }),
    stroke: new Stroke({ color: 'red', width: 1 }),
  }),
  zIndex: 100,
})

export const vectorPolygonStyleSelected = new Style({
  stroke: new Stroke({
    color: 'red',
    width: 3,
  }),
  fill: new Fill({
    color: 'rgba(0, 0, 255, 0.05)',
  }),
})

export const interactionOnClick = new Select({
  condition: click,
  style: (feature) => {
    return vectorPolygonStyleSelected
  },
})
