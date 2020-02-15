import { createSelector } from 'reselect'
import { StateTypes as UserState } from 'utils/reducers/user'
import { StateTypes as AuthState } from 'utils/reducers/auth'

export const userSelector = createSelector(
  (state: UserState) => state.getIn(['user']),
  substate => substate.toJS(),
)

export const authSelector = createSelector(
  (state: AuthState) => state.getIn(['auth']),
  substate => substate.toJS(),
)
