import { fromJS, Map } from 'immutable'
import { UserActionTypes, USER } from 'utils/actions/user'

interface PostionTypes {
  id: string
  numShares: number
  price: number
  total: number
  expectedPercentage: number
  realPercentage: number
  buy: number
}

export interface StateTypes extends Map<any, any> {
  costToBuy: number
  totalCash: number
  totalPositionValue: number
  availableCash: number
  positions: PostionTypes[]
}

const defaultState: StateTypes = fromJS({
  costToBuy: 0,
  totalCash: 0,
  totalPostionValue: 0,
  availableCash: 0,
  positions: [
    {
      id: '',
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
