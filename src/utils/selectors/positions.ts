import { createSelector } from 'reselect'
import { StateTypes as PositionTypes, ShareTypes, TotalsTypes } from 'utils/reducers/positions'

export const positionsSelector = createSelector(
  (state: PositionTypes) => state.getIn(['positions']),
  substate => substate.toJS()
)

export const sharesSelector = createSelector(
  positionsSelector,
  (substate): ShareTypes[] => (substate.shares || []).filter(Boolean)
)

export const totalsSelector = createSelector(
  positionsSelector,
  (substate): TotalsTypes => substate.totals
)
