import { AuthActionTypes, SIGN_IN, SIGN_OUT } from 'utils/actions/auth'

const defaultState = {
  isAuthing: false,
  isLoggedIn: false,
  authError: null
}

export const authReducer = (state = defaultState, action: AuthActionTypes) => {
  if (!action) return state
  console.log('----------')
  console.log('action.payload', action.payload)
  console.log('^^^^^^^^^^')
  switch (action.type) {
    case SIGN_IN.REQUEST:
      return {
        ...state,
        isAuthing: true
      }
    case SIGN_IN.SUCCESS:
      return {
        ...state,
        isAuthing: false,
        isLoggedIn: true,
        authError: null
      }
    case SIGN_IN.FAILURE:
      return {
        ...state,
        isAuthing: false,
        authError: action.payload
      }
    case SIGN_OUT.REQUEST:
      return {
        ...state,
        isAuthing: true
      }
    case SIGN_OUT.SUCCESS:
      return {
        ...state,
        isAuthing: false,
        isLoggedIn: false,
        authError: null
      }
    case SIGN_OUT.FAILURE:
      return {
        ...state,
        isAuthing: false,
        authError: action.payload
      }
    default:
      return state
  }
}
