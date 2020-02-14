import { UserActionTypes, USER } from 'utils/actions/user'

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
    default:
      return state
  }
}
