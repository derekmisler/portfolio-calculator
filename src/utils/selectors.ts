import { createSelector } from 'reselect'
import { StateTypes as AuthState } from 'utils/reducers/auth'

export const userSelector = createSelector(
  (state: AuthState) => state.getIn(['auth', 'user']),
  substate => substate.toJS(),
)

export const authSelector = createSelector(
  (state: AuthState) => state.getIn(['auth']),
  substate => substate.toJS(),
)

export const positionsSelector = createSelector(
  (state: AuthState) => state.getIn(['positions']),
  substate => substate.toJS(),
)
