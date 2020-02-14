import { keymirror } from 'utils/keymirror'

export const SIGN_IN = keymirror({
  REQUEST: '',
  SUCCESS: '',
  FAILURE: ''
}, 'SIGN_IN')

export const SIGN_OUT = keymirror({
  REQUEST: '',
  SUCCESS: '',
  FAILURE: ''
}, 'SIGN_OUT')

export interface AuthActionTypes {
  type: typeof SIGN_IN.REQUEST | typeof SIGN_OUT.REQUEST,
  payload?: string
}

export const signIn = () => ({
  type: SIGN_IN.REQUEST
})

export const signOut = () => ({
  type: SIGN_OUT.REQUEST
})
