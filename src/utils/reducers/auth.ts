import { AuthActionTypes, SIGN_IN, SIGN_OUT } from 'utils/actions/auth'

interface StateTypes {
  isAuthing: boolean
  isLoggedIn: boolean
  authError?: string
}

const defaultState: StateTypes = {
  isAuthing: false,
  isLoggedIn: false,
  authError: undefined
}

export const authReducer = (state = defaultState, action: AuthActionTypes): StateTypes => {
  if (!action) return state
  switch (action.type) {
    case SIGN_OUT.REQUEST:
    case SIGN_IN.REQUEST:
      return {
        ...state,
        isAuthing: true
      }
    case SIGN_IN.SUCCESS: {
      return {
        ...state,
        isAuthing: false,
        isLoggedIn: true,
        authError: undefined
      }
    }
    case SIGN_OUT.FAILURE:
    case SIGN_IN.FAILURE:
      return {
        ...state,
        isAuthing: false,
        authError: action.payload
      }
    case SIGN_OUT.SUCCESS:
      return defaultState
    default:
      return state
  }
}
