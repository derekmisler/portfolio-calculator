import { fromJS, Map, List } from 'immutable'
import {
  GET_POSITIONS,
  UPDATE_TOTALS,
  PositionsActionsTypes
} from 'utils/actions/positions'
import { PositionStateTypes } from 'types/positions'


const defaultState: PositionStateTypes = fromJS({
  isFetchingPositions: false,
  isUpdatingPositions: false,
  positionsError: undefined,
  totals: Map({
    costToBuy: 0,
    totalCash: 0,
    totalPositionValue: 0,
    availableCash: 0,
    totalPercentage: 100
  }),
  shares: List([])
})

export const positionsReducer = (
  state = defaultState,
  action: PositionsActionsTypes
): PositionStateTypes => {
  if (!action) return state
  const { type, payload } = action
  switch (type) {
    case GET_POSITIONS.REQUEST:
      return state.setIn(['isFetchingPositions'], true)
    case GET_POSITIONS.SUCCESS:
      console.log('----------')
      console.log('payload', payload)
      console.log('^^^^^^^^^^')
      return state.withMutations(map => {
        map
          .setIn(['isFetchingPositions'], false)
          .deleteIn(['positionsError'])
          .setIn(['totals'], payload.totals)
          .setIn(['shares'], payload.shares)
      })
    case GET_POSITIONS.FAILURE:
      return state.withMutations(map => {
        map.setIn(['isFetchingPositions'], false).setIn(['positionsError'], payload.error)
      })
    case UPDATE_TOTALS.REQUEST:
      return state.setIn(['isUpdatingPositions'], true)
    case UPDATE_TOTALS.SUCCESS:
      return state.withMutations(map => {
        map
          .setIn(['isUpdatingPositions'], false)
          .deleteIn(['positionsError'])
          .setIn(['shares'], payload.shares)
          .setIn(['totals'], payload.totals)
      })
    case UPDATE_TOTALS.FAILURE:
      return state.withMutations(map => {
        map.setIn(['isUpdatingPositions'], false).setIn(['positionsError'], payload.error)
      })
    default:
      return state
  }
}
