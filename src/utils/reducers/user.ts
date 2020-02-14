import { schema, normalize } from 'normalizr'
import { UserActionTypes, USER } from 'utils/actions/user'

interface StateTypes {
  isUpdating: boolean
  isLoggedIn: boolean
  userError?: string
  details?: {
    uid: string
  }
}

const defaultState: StateTypes = {
  isUpdating: false,
  isLoggedIn: false,
  userError: undefined,
  details: {
    uid: ''
  }
}

export const userReducer = (state = defaultState, action: UserActionTypes): StateTypes => {
  if (!action) return state
  switch (action.type) {
    case USER.REQUEST:
      return {
        ...state,
        isUpdating: true
      }
    case USER.SUCCESS: {
      return {
        ...state,
        isUpdating: false,
        isLoggedIn: true,
        userError: undefined,
        details: action.payload
      }
    }
    case USER.FAILURE:
      return {
        ...state,
        isUpdating: false,
        userError: action.payload
      }
    case USER.SIGN_OUT:
      return {
        ...state,
        isLoggedIn: false,
        details: undefined
      }
    default:
      return state
  }
}
