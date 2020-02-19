import { createSelector } from 'reselect'
import { StateTypes as AuthState, UserTypes } from 'utils/reducers/auth'
import { StateTypes as PositionTypes, ShareTypes, TotalsTypes } from 'utils/reducers/positions'

export const userSelector = createSelector(
  (state: AuthState) => state.getIn(['auth', 'user']),
  (substate): UserTypes => substate.toJS()
)

export const authSelector = createSelector(
  (state: AuthState) => state.getIn(['auth']),
  substate => substate.toJS()
)

export const positionsSelector = createSelector(
  (state: PositionTypes) => state.getIn(['positions']),
  substate => substate.toJS()
)

export const sharesSelector = createSelector(
  (state: PositionTypes) => state.getIn(['positions', 'shares']),
  (substate): ShareTypes[] => {
    console.log('----------')
    console.log('sharesSelector', substate)
    console.log('^^^^^^^^^^')
    const jsShares = substate.toJS()
    return Object.values(jsShares)
  }
)

export const totalsSelector = createSelector(
  (state: PositionTypes) => state.getIn(['positions', 'totals']),
  (substate): TotalsTypes => {
    console.log('----------')
    console.log('totalsSelector', substate)
    console.log('^^^^^^^^^^')
    return substate.toJS()
  }
)
