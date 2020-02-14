import { UserActionTypes, USER } from 'utils/actions/user'
import { SIGN_OUT } from 'utils/actions/auth'

interface StateTypes {
  uid: string
}

const defaultState: StateTypes = {
  uid: ''
}

export const userReducer = (state = defaultState, action: UserActionTypes): StateTypes => {
  if (!action) return state
  switch (action.type) {
    case USER.UPDATE:
      return {
        ...state,
        ...action.payload
      }
    case SIGN_OUT.SUCCESS:
      return defaultState
    default:
      return state
  }
}
