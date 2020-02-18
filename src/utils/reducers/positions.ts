import { normalize, schema } from 'normalizr'
import { fromJS, Map, List } from 'immutable'
import { GET_POSITIONS, ADD_POSITION, UPDATE_POSITION, DELETE_POSITION, PositionsActionsTypes } from 'utils/actions/positions'

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
  shares: {
    [positionId: string]: ShareTypes
  }
}

const defaultState: StateTypes = fromJS({
  isFetchingPositions: false,
  positionsError: undefined,
  totals: {
    costToBuy: 0,
    totalCash: 0,
    totalPositionValue: 0,
    availableCash: 0,
    totalPercentage: 100
  },
  shares: {}
})

export const positionsReducer = (state = defaultState, action: PositionsActionsTypes): StateTypes => {
  if (!action) return state
  switch (action.type) {
    case DELETE_POSITION.REQUEST:
    case GET_POSITIONS.REQUEST:
    case UPDATE_POSITION.REQUEST:
    case ADD_POSITION.REQUEST:
      return state.setIn(['isFetchingPositions'], true)
    case UPDATE_POSITION.SUCCESS:
    case ADD_POSITION.SUCCESS:
      return state
        .setIn(['isFetchingPositions'], false)
        .setIn(['positionsError'], undefined)
        .setIn(['shares', action.payload.positionId], action.payload.share)
        .setIn(['totals'], action.payload.totals)
    case DELETE_POSITION.SUCCESS:
      return state
        .setIn(['isFetchingPositions'], false)
        .setIn(['positionsError'], undefined)
        .setIn(['shares', action.payload.share.positionId], undefined)
        .setIn(['totals'], action.payload.totals)
    case DELETE_POSITION.FAILURE:
    case ADD_POSITION.FAILURE:
      return state
        .setIn(['isFetchingPositions'], false)
        .setIn(['positionsError'], action.payload.error)
    default:
      return state
  }
}
