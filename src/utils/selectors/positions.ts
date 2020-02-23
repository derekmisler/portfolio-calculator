import { createSelector } from 'reselect'
import { StateTypes as PositionTypes, ShareTypes, SharesTypes, TotalsTypes } from 'utils/reducers/positions'

export const positionsSelector = createSelector(
  (state: PositionTypes) => state.getIn(['positions']),
  substate => substate.toJS()
)

export const sharesSelector = createSelector(
  (state: PositionTypes) => state.getIn(['positions', 'shares']),
  (substate): ShareTypes[] => {
    const jsShares = substate.toJS()
    return Object.values(jsShares)
  }
)

export const totalsSelector = createSelector(
  (state: PositionTypes) => state.getIn(['positions', 'totals']),
  (substate): TotalsTypes => substate.toJS()
)
