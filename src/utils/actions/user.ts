import { keymirror } from 'utils/keymirror'

export const USER = keymirror({
  REQUEST: '',
  SUCCESS: '',
  FAILURE: '',
  SIGN_OUT: '',
}, 'USER')

interface UpdateUserDataAction {
  type: typeof USER.REQUEST | typeof USER.SUCCESS | typeof USER.FAILURE
  payload?: any
}
export type UserActionTypes = UpdateUserDataAction

export const updateUserData = (user?: any) => ({
  type: !user ? USER.REQUEST : USER.SUCCESS,
  payload: user
})

export const userUserDataError = (error: string) => ({
  type: USER.FAILURE,
  payload: error
})

export const signOut = () => ({
  type: USER.SIGN_OUT
})
