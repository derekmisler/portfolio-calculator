import { AuthActionTypes } from 'utils/actions/auth'

const defaultState = {
  isLoggedIn: false
}

export const authReducer = (state = defaultState, action: AuthActionTypes) => {
  if (!action) return state
  switch (action.type) {
    default:
      return state
  }
}
