import { fromJS, Map } from 'immutable'
import { AuthActionTypes, SIGN_IN, SIGN_OUT } from 'utils/actions/auth'

export interface StateTypes extends Map<any, any> {
  isAuthing: boolean
  isLoggedIn: boolean
  authError?: string
}

const defaultState: StateTypes = fromJS({
  isAuthing: false,
  isLoggedIn: false,
  authError: undefined
})

export const authReducer = (state = defaultState, action: AuthActionTypes): StateTypes => {
  if (!action) return state
  switch (action.type) {
    case SIGN_OUT.REQUEST:
    case SIGN_IN.REQUEST:
      return state.setIn(['isAuthing'], true)
    case SIGN_IN.SUCCESS:
      return state
        .setIn(['isAuthing'], false)
        .setIn(['isLoggedIn'], true)
        .setIn(['authError'], undefined)
    case SIGN_OUT.FAILURE:
    case SIGN_IN.FAILURE:
      return state
        .setIn(['isAuthing'], false)
        .setIn(['authError'], action.payload.error)
    case SIGN_OUT.SUCCESS:
      return defaultState
    default:
      return state
  }
}
