import { fromJS, Map } from 'immutable'
import { UserActionTypes, USER } from 'utils/actions/user'

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
    totalPostionValue: 0,
    availableCash: 0,
    totalPercentage: 100
  },
  positions: [
    {
      id: '123',
      numShares: 0,
      price: 0,
      total: 0,
      expectedPercentage: 0,
      realPercentage: 0,
      buy: 0
    }
  ]
})

export const positionsReducer = (state = defaultState, action: UserActionTypes): StateTypes => {
  if (!action) return state
  switch (action.type) {
    default:
      return state
  }
}
