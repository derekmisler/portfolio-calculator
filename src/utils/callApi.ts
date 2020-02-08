import axios, { AxiosRequestConfig } from 'axios'
import queryString from 'query-string'

export const NOAA_ENDPOINTS = {
  points: 'points',
  alerts: 'alerts/active/zone'
}
export const GOOGLE_ENDPOINTS = {
  places: 'place/autocomplete/json',
  geocode: 'geocode/json'
}

const KEYS = {
  google: `${process.env.PLACES_API_KEY}`
}

interface RequestDataTypes {
  method?: 'GET' | 'PUT' | 'POST'
  body?: any
  url?: string
  group?: string
  endpoint: string
  params?: { [key: string]: string | number }
}

const createRequestObj = (requestData: RequestDataTypes) => {
  const { method = 'get', endpoint, body = {} } = requestData
  const url = createFullUrl(requestData)
  const isGoogle = Object.values(GOOGLE_ENDPOINTS).includes(endpoint)
  const requestObject: AxiosRequestConfig = {
    url,
    method: method || 'get',
    headers: new Headers({
      'Content-Type': isGoogle ? 'application/json' : 'application/ld+json'
    })
  }
  if (method !== 'get') requestObject.data = JSON.stringify(body)
  else delete requestObject.data
  return requestObject
}

export const createFullUrl = (requestData: RequestDataTypes) => {
  const { url, endpoint, group, params = {} } = requestData
  if (url) return url

  const isGoogle = Object.values(GOOGLE_ENDPOINTS).includes(endpoint)

  if (isGoogle) params.key = KEYS.google

  const API_BASE = isGoogle
    ? 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api'
    : 'https://api.weather.gov'

  let fullUrl = `${API_BASE}/${endpoint}`
  if (group) fullUrl += `/${group}`
  if (params) fullUrl += `?${queryString.stringify(params)}`
  return fullUrl
}

export const callApi = async (requestData: RequestDataTypes) => {
  const request = createRequestObj(requestData)
  try {
    const { data } = await axios(request)
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

export default callApi
