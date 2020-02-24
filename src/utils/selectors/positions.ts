import { createSelector } from 'reselect'

import { PositionStateTypes, TotalsTypes, ShareTypes } from 'types/positions'

export const positionsSelector = createSelector(
  (state: PositionStateTypes) => state.getIn(['positions']),
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
