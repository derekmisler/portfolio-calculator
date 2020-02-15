import { fromJS, Map } from 'immutable'
import { UserActionTypes, USER } from 'utils/actions/user'
import { SIGN_OUT } from 'utils/actions/auth'

export interface StateTypes extends Map<any, any> {
  uid: string
}

const defaultState: StateTypes = fromJS({
  uid: ''
})

export const userReducer = (state = defaultState, action: UserActionTypes): StateTypes => {
  if (!action) return state
  switch (action.type) {
    case USER.UPDATE:
      return state.setIn([], fromJS(action.payload))
    case SIGN_OUT.SUCCESS:
      return defaultState
    default:
      return state
  }
}
