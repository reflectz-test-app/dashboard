export interface Geo {
  lat: string,
  lon: string,
  userCount: number,
  name: string,
  originalCityName: string
}

export interface GeoModel {
  counter: number,
  city: string,
  query: string
}

export interface GeoResponse {
  userCount: number,
  "place_id": number,
  "licence": string,
  "osm_type": string,
  "osm_id": number,
  "lat": string,
  "lon": string,
  "class": string,
  "type": string,
  "place_rank": number,
  "importance": number,
  "addresstype": string,
  "name": string,
  "display_name": string,
  "boundingbox": string[],
  "originalQuery": string
}
