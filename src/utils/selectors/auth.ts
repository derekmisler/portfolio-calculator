import { createSelector } from 'reselect'
import { StateTypes as AuthState, UserTypes } from 'utils/reducers/auth'

export const userSelector = createSelector(
  (state: AuthState) => state.getIn(['auth', 'user']),
  (substate): UserTypes => substate.toJS()
)

export const authSelector = createSelector(
  (state: AuthState) => state.getIn(['auth']),
  substate => substate.toJS()
)

