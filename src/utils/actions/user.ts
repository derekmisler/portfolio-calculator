import { keymirror } from 'utils/keymirror'

export const USER = keymirror({
  UPDATE: ''
}, 'USER')

export interface UserActionTypes {
  type: typeof USER.UPDATE
  payload?: any
}

export const updateUserData = (user?: any) => ({
  type: USER.UPDATE,
  payload: user
})
