import queryString from 'query-string'

export const ENDPOINTS = {
  points: 'points',
  alerts: 'alerts/active/zone'
}

const KEYS = {
  google: `${process.env.PLACES_API_KEY}`
}

interface RequestDataTypes {
  method?: 'PUT' | 'POST' | 'GET'
  body?: any
  url?: string
  group?: string
  endpoint: string
  params?: { [key: string]: string | number }
}

interface RequestObjectTypes extends Omit<RequestDataTypes, 'endpoint'> {
  headers: Headers
  data?: string
  mode?: 'cors' | 'navigate' | 'same-origin' | 'no-cors'
  cache?: 'default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache' | 'only-if-cached'
}

const createRequestObj = (requestData: RequestDataTypes) => {
  const { method = 'GET', body = {} } = requestData
  const requestObject: RequestObjectTypes = {
    method,
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    mode: 'cors',
    cache: 'default'
  }
  if (method !== 'GET') requestObject.data = JSON.stringify(body)
  else delete requestObject.data
  return requestObject
}

export const createFullUrl = (requestData: RequestDataTypes) => {
  const { url, endpoint, group, params = {} } = requestData
  if (url) return url

  const API_BASE = 'https://api.weather.gov'

  let fullUrl = `${API_BASE}/${endpoint}`
  if (group) fullUrl += `/${group}`
  if (params) fullUrl += `?${queryString.stringify(params)}`
  return fullUrl
}

export const callApi = async (requestData: RequestDataTypes) => {
  const url = createFullUrl(requestData)
  const request = createRequestObj(requestData)
  try {
    const response = await fetch(url, request)
    return await response.json()
  } catch (error) {
    return Promise.reject(error)
  }
}

export default callApi
