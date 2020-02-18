import { fromJS, Map } from 'immutable'
import { POSITIONS, PositionsActionsTypes } from 'utils/actions/positions'

export interface PostionTypes {
  id: string
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
  totals: TotalsTypes
  positions: PostionTypes[]
}

const defaultState: StateTypes = fromJS({
  totals: {
    costToBuy: 0,
    totalCash: 0,
    totalPositionValue: 0,
    availableCash: 0,
    totalPercentage: 100
  },
  positions: []
})

export const positionsReducer = (state = defaultState, action: PositionsActionsTypes): StateTypes => {
  if (!action) return state
  switch (action.type) {
    case POSITIONS.ADD:
      return state
    case POSITIONS.UPDATE:
      return state
    case POSITIONS.DELETE:
      return state
    default:
      return state
  }
}
