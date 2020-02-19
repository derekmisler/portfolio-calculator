import { fromJS, Map } from 'immutable'
import { GET_POSITIONS, ADD_POSITION, UPDATE_POSITION, DELETE_POSITION, UPDATE_TOTALS, PositionsActionsTypes } from 'utils/actions/positions'
import uuid from 'uuid/v4'

export interface ShareTypes {
  positionId: string
  abbr: string
  numShares: number
  price: number
  total: number
  expectedPercentage: number
  realPercentage: number
  buy: number
}

export interface SharesTypes {
  [positionId: string]: ShareTypes
}

export interface TotalsTypes {
  costToBuy: number
  totalCash: number
  totalPositionValue: number
  totalPercentage: number
  availableCash: number
}

export interface StateTypes extends Map<any, any> {
  isFetchingPositions: boolean
  positionsError: string
  totals: TotalsTypes
  shares: SharesTypes
}

const initialPositionId = uuid()

const defaultState: StateTypes = fromJS({
  isFetchingPositions: false,
  positionsError: undefined,
  totals: Map({
    costToBuy: 0,
    totalCash: 0,
    totalPositionValue: 0,
    availableCash: 0,
    totalPercentage: 100
  }),
  shares: Map({})
})

export const positionsReducer = (state = defaultState, action: PositionsActionsTypes): StateTypes => {
  if (!action) return state
  switch (action.type) {
    case UPDATE_TOTALS.REQUEST:
    case DELETE_POSITION.REQUEST:
    case GET_POSITIONS.REQUEST:
    case UPDATE_POSITION.REQUEST:
    case ADD_POSITION.REQUEST:
      return state.setIn(['isFetchingPositions'], true)
    case GET_POSITIONS.SUCCESS:
      return state
        .setIn(['isFetchingPositions'], false)
        .deleteIn(['positionsError'])
        .mergeDeepIn(['shares'], action.payload.shares)
        .mergeDeepIn(['totals'], action.payload.totals)
    case ADD_POSITION.SUCCESS:
      return state
        .setIn(['isFetchingPositions'], false)
        .deleteIn(['positionsError'])
        .setIn(['shares', action.payload.positionId], action.payload)
    case UPDATE_POSITION.SUCCESS:
      return state
        .setIn(['isFetchingPositions'], false)
        .deleteIn(['positionsError'])
        .mergeDeepIn(['shares', action.payload.positionId], action.payload)
    case DELETE_POSITION.SUCCESS:
      return state
        .setIn(['isFetchingPositions'], false)
        .deleteIn(['positionsError'])
        .deleteIn(['shares', action.payload.positionId])
    case UPDATE_TOTALS.SUCCESS:
      return state
        .setIn(['isFetchingPositions'], false)
        .mergeDeepIn(['shares'], action.payload.shares)
        .mergeDeepIn(['totals'], action.payload.totals)
    case UPDATE_POSITION.FAILURE:
    case UPDATE_TOTALS.FAILURE:
    case DELETE_POSITION.FAILURE:
    case ADD_POSITION.FAILURE:
      return state
        .setIn(['isFetchingPositions'], false)
        .setIn(['positionsError'], action.payload.error)      
    default:
      return state
  }
}
