import { UserActionTypes } from 'utils/actions/user'
const defaultState = null

export const userReducer = (state = defaultState, action: UserActionTypes) => {
  if (!action) return state
  switch (action.type) {
    default:
      return state
  }
}
