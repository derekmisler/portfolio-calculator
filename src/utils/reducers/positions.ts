import { fromJS, Map } from 'immutable'
import {
  GET_POSITIONS,
  ADD_POSITION,
  UPDATE_POSITION,
  DELETE_POSITION,
  UPDATE_TOTALS,
  PositionsActionsTypes
} from 'utils/actions/positions'

export interface ShareTypes {
  id: string
  abbr: string
  numShares: number
  price: number
  total: number
  expectedPercentage: number
  realPercentage: number
  buy: number
}

export interface SharesTypes {
  [id: string]: ShareTypes
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

export const positionsReducer = (
  state = defaultState,
  action: PositionsActionsTypes
): StateTypes => {
  if (!action) return state
  const { type, payload } = action
  switch (type) {
    case UPDATE_TOTALS.REQUEST:
    case GET_POSITIONS.REQUEST:
    case ADD_POSITION:
    case UPDATE_POSITION:
    case DELETE_POSITION:
      return state.setIn(['isFetchingPositions'], true)
    case GET_POSITIONS.SUCCESS:
      return state.withMutations(map => {
        map
          .setIn(['isFetchingPositions'], false)
          .deleteIn(['positionsError'])
          .mergeDeepIn(['shares'], payload.shares)
          .mergeDeepIn(['totals'], payload.totals)
        })
    case UPDATE_TOTALS.SUCCESS:
      return state.withMutations(map => {
        map
          .setIn(['isFetchingPositions'], false)
          .deleteIn(['positionsError'])
          .mergeDeepIn(['shares'], payload.shares)
          .mergeDeepIn(['totals'], payload.totals)
        })
    case GET_POSITIONS.FAILURE:
    case UPDATE_TOTALS.FAILURE:
      return state.withMutations(map => {
        map
          .setIn(['isFetchingPositions'], false)
          .setIn(['positionsError'], payload.error)
      })
    default:
      return state
  }
}
